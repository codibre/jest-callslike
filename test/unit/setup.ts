afterEach(() => {
	jest.restoreAllMocks();
	jest.clearAllMocks();
});

export function getNames<T extends object>(c: { prototype: T }): T {
	return new Proxy(c.prototype, {
		get(target: T, property: string) {
			const result = target[property as keyof T];
			if (!result) {
				throw new Error(`Method ${property} doesn't exist`);
			}

			return result;
		},
	});
}

export function expectCallsLike(spy: any, ...params: unknown[][]) {
	expect(spy).toHaveBeenCalledTimes(params.length);
	params.forEach((params, i) => {
		expect(spy).toHaveBeenNthCalledWith(i + 1, ...params);
	});
}
