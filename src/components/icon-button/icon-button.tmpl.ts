export default `
mixin Icon(type)
	case icon
		when 'arrow-left': <svg role='img' xmlns='http://www.w3.org/2000/svg' width='19' height='19' stroke='#fff' stroke-width='1' fill='none' viewBox='0 0 24 24' aria-labelledby='arrowLeftIconTitle'><title id='arrowLeftIconTitle'>Arrow Left</title><path d='M9 6l-6 6 6 6'/><path d='M21 12H4'/><path stroke-linecap='round' d='M3 12h1'/></svg>
		when 'arrow-right': <svg role="img" xmlns="http://www.w3.org/2000/svg" width="19" height="19" stroke="#fff" stroke-width="1" fill="none" viewBox="0 0 24 24" aria-labelledby="arrowRightIconTitle"><title id="arrowRightIconTitle">Arrow Right</title><path d="M15 18l6-6-6-6"/><path d="M3 12h17"/><path stroke-linecap="round" d="M21 12h-1"/></svg>

if href
	a.button.button_round(href=href)
		+Icon
else
	button.button.button_round(type=typeButton)
		+Icon
`;
