export default `
div(class=className).details
	+Avatar
	ul.list
		each item in data
			li.d-flex.f-jc-sb
				span= item.label
				span.details__value= item.value
`;
