import DirectoryItem from '../directory-item/directory-item.component';
import { Fragment } from 'react';

import { DirectoryContainer, DirectoryFooter, } from './directory.styles.jsx';

const Directory = ({directories}) => {
  return (
    <Fragment>
      <DirectoryContainer>
        {directories.map(category => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoryContainer>
      <DirectoryFooter>
        <p>Inspiration for future getaways.</p>
        <span>©2022 Esther, Inc.</span>
      </DirectoryFooter>
    </Fragment>
  )
}

export default Directory;