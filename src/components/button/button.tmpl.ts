export default `
- const classRound = isRound && 'button_round'
- const typeButton = type || 'button'
if href
    a.button(class=classRound, href=href)=children
else
    button.button(type=typeButton class=classRound)=children
`;
