import './directory.styles.scss';
import DirectoryItem from '../directory-item/directory-item.component';
import { Fragment } from 'react';

const Directory = ({directories}) => {
  return (
    <Fragment>
      <div className="directory-container">
        {directories.map(category => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </div>
      <p>Inspiration for future getaways
        ©2022 Esther, Inc.</p>
    </Fragment>
  )
}

export default Directory;