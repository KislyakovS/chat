export default `
mixin message(text, time, isIncoming)
	div(class=isIncoming && 'message_incoming').message
		p.message__text= text
		time.message__time= time

ol.messages.reset
	li.messages__item.messages__item_side-right
		+message('Hello', '10:20', true)
	li.messages__item
		+message('Hell, Ivan', '11:34')
`;
