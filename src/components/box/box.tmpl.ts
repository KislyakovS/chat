export default `
- const w = width || '400px'
- const h = height || 'auto'
- const c = (className || '') + (isCenter ? ' box_center' : '')
div.box(class=c style={ width: w, 'min-height': h })
	+block
`;
