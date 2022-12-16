export default (obj: Record<string, any>, path: string, value: unknown) => {
	const keys = path.split('.');
	const lastKey = keys.pop();

	if (lastKey) {
		keys.reduce((acc, key) => {
			if (!(key in acc)) {
				acc[key] = {};
			}

			return acc[key];
		}, obj)[lastKey] = value;
	}
};
