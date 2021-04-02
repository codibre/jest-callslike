expect.extend({
	toHaveCallsLike(spy: unknown, ...parameters: unknown[][]) {
		const errors: string[] = [];
		try {
			expect(spy).toBeCalledTimes(parameters.length);
		} catch (err) {
			errors.push(err);
		}
		parameters.forEach((params, i) => {
			try {
				expect(spy).toHaveBeenNthCalledWith(i + 1, ...params);
			} catch (err) {
				errors.push(err.message.replace(/\n+Number of calls: .+$/, '\n'));
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

declare global {
	namespace jest {
		interface Matchers<R> {
			toHaveCallsLike(...parameters: unknown[][]): R;
		}
	}
}

export {};
