export default `
- const w = width || '400px'
- const h = height || 'auto'
div.box(class=className style={ width: width, 'min-height': height })
	+block
`;
