export default (str: string) => {
	try {
		JSON.parse(str);
	} catch (_) {
		return false;
	}

	return true;
};
