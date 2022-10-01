export default `
- const inputType = type || 'text'
label.field(class=className)
    unless !label
        span.field__label=label
    input.field__input(type=inputType placeholder=placeholder)
    unless !error
        sapn.field__error=error
`;
