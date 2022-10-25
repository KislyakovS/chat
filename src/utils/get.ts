export default (obj: Record<string, any>, path: string) => {
	const keys = path.split('.');

	return keys.reduce((acc, key) => {
		if (key in acc) {
			return acc[key];
		}

		throw new Error(`The '${key}' element does not exist in this object.`);
	}, obj);
};
