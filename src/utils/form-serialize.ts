export default <T>(form: HTMLFormElement) => {
	const formData = new FormData(form);

	return [...formData.entries()]
		.reduce((res, [name, value]) => ({ ...res, [name]: value }), {}) as T;
};
