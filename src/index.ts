/* eslint-disable @typescript-eslint/no-explicit-any */
expect.extend({
	toHaveCallsLike(spy: unknown, ...parameters: unknown[][]) {
		const errors: unknown[] = [];
		try {
			expect(spy).toHaveBeenCalledTimes(parameters.length);
		} catch (err) {
			errors.push(err);
		}
		parameters.forEach((params, i) => {
			try {
				expect(spy).toHaveBeenNthCalledWith(i + 1, ...params);
			} catch (err) {
				errors.push(
					(err as Error).message.replace(/\n+Number of calls: .+$/, '\n'),
				);
			}
		});
		const pass = errors.length === 0;
		const separator = '-------------------------------------------\n';
		const message = pass
			? ''
			: `${separator}${errors.map((x) => x).join(`\n${separator}`)}\n`;
		return {
			message: () => message,
			pass,
		};
	},
});

class Exact {
	private sample: unknown;
	readonly inverse: void;
	readonly $$typeof: Symbol;

	constructor(sample: unknown) {
		this.inverse = void 0;

		this.$$typeof = Symbol.for('jest.asymmetricMatcher');
		this.sample = sample;
	}

	asymmetricMatch(other: unknown) {
		return other === this.sample;
	}
}

expect.exact = (sample) => new Exact(sample);

declare global {
	namespace jest {
		interface Matchers<R> {
			toHaveCallsLike(...parameters: unknown[][]): R;
		}

		interface Expect {
			exact(sample: unknown): any;
		}
	}
}

export {};
