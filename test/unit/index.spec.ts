import '../../src';

describe('index.ts', () => {
	let spy: Function;

	beforeEach(() => {
		spy = jest.fn();
		spy(1);
		spy('a');
		spy(true);
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
			expect(spy).toHaveCallsLike([1], ['b'], [true]);
		} catch (err) {
			thrownError = err;
		}

		expect(thrownError).toBeInstanceOf(Error);
	});

	it('should throw an error when order of calls does not match', () => {
		let thrownError: any;

		try {
			expect(spy).toHaveCallsLike(['a'], [1], [true]);
		} catch (err) {
			thrownError = err;
		}

		expect(thrownError).toBeInstanceOf(Error);
	});

	it('should pass the expectation when everything matches', () => {
		let thrownError: any;

		try {
			expect(spy).toHaveCallsLike([1], ['a'], [true]);
		} catch (err) {
			thrownError = err;
		}

		expect(thrownError).toBeUndefined();
	});
});
