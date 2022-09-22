export default `
- const srcImage = src ? src : '/static/image/default-avatar.webp';
- const s = size ? size : '50px';
img.avatar(style={ width: s, height: s } src=srcImage )
`;
