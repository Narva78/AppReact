import './InscriptionForm.css'

export const InscriptionForm = ({
  name,
  label,
  value,
  type,
  placeholder,
  children,
  maxlength,
  minlength,
  onChange,
  onInvalid,
  onInput,
}) => {
  return (
    <div className="form">
      {label ? <label>{label}</label> : null}
      {}
      <input
        id={name + value}
        name={name}
        type={type}
        className="form__input"
        size="25"
        placeholder={placeholder}
        maxlength={maxlength}
        minlength={minlength}
        onChange={onChange}
        onInvalid={onInvalid}
        onInput={onInput}
        required
      >
        {children}
      </input>
    </div>
  )
}
