import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { ColorPickerDiv } from './color-container.styles.jsx';

import ColorPicker from '../../components/color-picker/color-picker.component';
import { selectActualColors } from '../../store/color-picker/color-picker.selector';


const ColorPickerContainer = () => {
  const actualColors = useSelector(selectActualColors);

  return (
      <Fragment>
        <ColorPickerDiv>
          {actualColors.map((color) => (
            <ColorPicker key={color.id} color={color} />
          ))}
        </ColorPickerDiv>
      </Fragment>
  )
}

export default ColorPickerContainer;