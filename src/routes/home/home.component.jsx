import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const directories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/gv7cDfS/pexels-godisable-jacob-1734798.jpg"
    },
    {
      "id": 2,
      "title": "jeans",
      "imageUrl": "https://i.ibb.co/1MYdCww/jeans.jpg"
    },
    {
      "id": 3,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/fN4BGPz/jackets.jpg"
    },
    {
      "id": 4,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/Fxw30VG/sneakers.jpg",
    },
    {
      "id": 5,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/w6XXkDT/womens.jpg"
    },
    {
      "id": 6,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/QY270Dd/mens.jpg"
    },
    {
      "id": 7,
      "title": "kids",
      "imageUrl": "https://i.ibb.co/c6W9f5h/kids.jpg"
    }
  ]
  return (
    <div>
      <Outlet />
      <Directory directories={directories} />
    </div>
  );
}

export default Home;