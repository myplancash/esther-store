import './button.styles.scss';

const Button = ({children, buttonStyle, ...otherProps}) => {

  const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
  }

  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonStyle]}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button;