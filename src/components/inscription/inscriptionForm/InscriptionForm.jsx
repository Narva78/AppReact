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
      options,
      onBlur,
    },
    ref
  ) => {
    return (
      <div className="form">
        {type !== 'radio' && label && <label htmlFor={name}>{label}</label>}
        {type === 'select' ? (
          <select
            id={name}
            ref={ref}
            name={name}
            value={value}
            className="form__input test"
            onChange={onChange}
            onInvalid={onInvalid}
            onInput={onInput}
            required
          >
            <option value="">Sélectionnez une option</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : type === 'radio' ? (
          <div className="form__radio">
            {label && (
              <label htmlFor={name} className="form__radio-label">
                {label}
              </label>
            )}
            <input
              id={name}
              ref={ref}
              name={name}
              type={type}
              className="form__radio-input"
              onChange={onChange}
            />
          </div>
        ) : (
          <input
            id={name}
            ref={type === 'password' ? ref : null}
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
            onBlur={onBlur}
            required
          />
        )}
        {children}
      </div>
    )
  }
)
