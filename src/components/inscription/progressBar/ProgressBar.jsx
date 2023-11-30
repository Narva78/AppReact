import './ProgressBar.scss'

export const ProgressBar = ({ currentStep }) => {
  const progressWidth = ((currentStep - 1) / (3 - 1)) * 100

  return (
    <div className="bar">
      <div className="bar__step">
        <span
          className={`bar__step__circle ${currentStep >= 1 ? 'active' : ''}`}
        >
          1
        </span>
        <span
          className={`bar__step__circle ${currentStep >= 2 ? 'active' : ''}`}
        >
          2
        </span>
        <span
          className={`bar__step__circle ${currentStep >= 3 ? 'active' : ''}`}
        >
          3
        </span>
        <div className="bar__step__progress">
          <span
            className="bar__step__progress__indicator"
            style={{ width: `${progressWidth}%` }}
          ></span>
        </div>
      </div>
    </div>
  )
}
