export default `
div.messager
	aside.messager__aside
		+User
		div.messager__search
			+Search
		+Dialogs
	section.messager__chat
		header.messager__header
			+User
		div.messager__main
			+Messages
		footer.messager__footer
			+SendMessageForm
`;
