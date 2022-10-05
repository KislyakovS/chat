export default `
- const inputType = type || 'text'
- const rowClass = isRow ? 'field_row' : ''
- const cls = className || ''
label.field(class=cls + rowClass)
    unless !label
        span.field__label=label
    input.field__input(type=inputType placeholder=placeholder)
    unless !error
        sapn.field__error=error
`;
