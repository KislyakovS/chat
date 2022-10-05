export default `
- const clsTable = isTable ? 'form_tabel' : ''
- const cls = className || ''
form.form(class=cls + clsTable)
	+block
`;
