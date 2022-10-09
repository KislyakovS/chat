export default `
- const clsTable = isTable ? 'form_table' : ''
- const cls = className || ''
form.form(class=cls + clsTable)
	+block
`;
