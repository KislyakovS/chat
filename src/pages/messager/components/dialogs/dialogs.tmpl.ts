export default `
mixin dialog(name, time, text, count)
	a.dialog.d-flex.f-ai-c(tabindex='1')
		img.avatar.dialog__avatar
		div.dialog__main.f-grow
			header.dialog__header.d-flex.f-jc-sb
				span.dialog__name= name
				time.dialog__time= time
			p.dialog__preview= text
			span.dialog__bage= count

ol.dialogs.reset
	li
		+dialog('Alex', '10:20', 'Hello, World!', '2')
	li
		+dialog('Alex', '10:20', 'Hello, World!', '2')
	li
		+dialog('Alex', '10:20', 'Hello, World!', '2')
	li
		+dialog('Alex', '10:20', 'Hello, World!', '2')
	li
		+dialog('Alex', '10:20', 'Hello, World!', '2')
`;
