import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';
import { Fragment } from 'react';

const Directory = ({categories}) => {
  return (
    <Fragment>
      <div className="directory-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
      <p>Inspiration for future getaways
        ©2022 Esther, Inc.</p>
    </Fragment>
  )
}

export default Directory;