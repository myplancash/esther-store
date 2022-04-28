import DirectoryItem from '../directory-item/directory-item.component';
import { Fragment } from 'react';

import { DirectoryContainer, DirectoryFooter, } from './directory.styles.jsx';

const directories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/gv7cDfS/pexels-godisable-jacob-1734798.jpg",
      "route": "shop/hats"
    },
    {
      "id": 2,
      "title": "jeans",
      "imageUrl": "https://i.ibb.co/1MYdCww/jeans.jpg",
      "route": "shop/jeans"
    },
    {
      "id": 3,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/fN4BGPz/jackets.jpg",
      "route": "shop/jackets"
    },
    {
      "id": 4,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/Fxw30VG/sneakers.jpg",
      "route": "shop/sneakers"
    },
    {
      "id": 5,
      "title": "women",
      "imageUrl": "https://i.ibb.co/w6XXkDT/womens.jpg",
      "route": "shop/women"
    },
    {
      "id": 6,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/QY270Dd/mens.jpg",
      "route": "shop/mens"
    },
    {
      "id": 7,
      "title": "kids",
      "imageUrl": "https://i.ibb.co/c6W9f5h/kids.jpg",
      "route": "shop/kids"
    }
  ]

const Directory = () => {

  return (
    <Fragment>
      <DirectoryContainer>
        {directories.map((category)=> (
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