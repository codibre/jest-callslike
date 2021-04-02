import '../../src';

const obj = {
	test: 'value',
};
describe('index.ts', () => {
	let spy: Function;

	beforeEach(() => {
		spy = jest.fn();
		spy(1);
		spy('a');
		spy(true);
		spy(obj);
	});

	it('should throw an error when number of calls does not match', () => {
		let thrownError: any;

		try {
			expect(spy).toHaveCallsLike();
		} catch (err) {
			thrownError = err;
		}

		expect(thrownError).toBeInstanceOf(Error);
	});

	it('should throw an error when the argument of some call does not match', () => {
		let thrownError: any;

		try {
			expect(spy).toHaveCallsLike([1], ['b'], [true], [{ test: 'value' }]);
		} catch (err) {
			thrownError = err;
		}

		expect(thrownError).toBeInstanceOf(Error);
	});

	it('should throw an error when order of calls does not match', () => {
		let thrownError: any;

		try {
			expect(spy).toHaveCallsLike(['a'], [1], [true], [{ test: 'value' }]);
		} catch (err) {
			thrownError = err;
		}

		expect(thrownError).toBeInstanceOf(Error);
	});

	it('should throw an error when expect.exact is used and the object is not exact the same', () => {
		let thrownError: any;

		try {
			expect(spy).toHaveCallsLike(
				[1],
				['a'],
				[true],
				[expect.exact({ test: 'value' })],
			);
		} catch (err) {
			thrownError = err;
		}

		expect(thrownError).toBeInstanceOf(Error);
	});

	it('should pass the expectation when everything matches', () => {
		let thrownError: any;

		try {
			expect(spy).toHaveCallsLike([1], ['a'], [true], [{ test: 'value' }]);
		} catch (err) {
			thrownError = err;
		}

		expect(thrownError).toBeUndefined();
	});

	it('should pass the expectation when everything matches, even using expect.exact', () => {
		let thrownError: any;

		try {
			expect(spy).toHaveCallsLike([1], ['a'], [true], [expect.exact(obj)]);
		} catch (err) {
			thrownError = err;
		}

		expect(thrownError).toBeUndefined();
	});
});
