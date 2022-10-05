export default `
.error-page-message
	span.error-page-message__status= status
	h1.title.error-page-message__text= message
	a.link(href='/') Back to chats
`;
