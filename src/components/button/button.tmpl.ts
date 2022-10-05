export default `
- const clsRound = isRound ? 'button_round' : ''
- const typeButton = type || 'button'
- const cls = className || ''
if href
    a.button(class=cls + clsRound, href=href)=text
else
    button.button(type=typeButton class=cls + clsRound)=text
`;
