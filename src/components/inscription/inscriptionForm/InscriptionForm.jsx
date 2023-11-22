import { forwardRef } from 'react'
import './InscriptionForm.scss'

export const InscriptionForm = forwardRef(
  (
    {
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
    },
    ref
  ) => {
    return (
      <div className="form">
        {label && <label htmlFor={name}>{label}</label>}
        <input
          id={name}
          ref={ref}
          name={name}
          type={type}
          className="form__input"
          size="25"
          placeholder={placeholder}
          maxLength={maxlength}
          minLength={minlength}
          onChange={onChange}
          onInvalid={onInvalid}
          onInput={onInput}
          required
        />
        {children}
      </div>
    )
  }
)
