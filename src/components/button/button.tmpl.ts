export default `
- const classRound = isRound && 'button_round'
- const typeButton = type || 'button'
if href
    a.button(class=classRound, href=href)=text
else
    button.button(type=typeButton class=classRound)=text
`;
