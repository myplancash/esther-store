import { FormInputLabel, Input, Group } from './form-input.styles.jsx';

const FormInput = ({label, ...otherProps}) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          htmlFor={otherProps.id}
          shrink={otherProps.value.length}
          // className={`${otherProps.value.length ? 'shrink' : ''}`}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  )
}

export default FormInput;