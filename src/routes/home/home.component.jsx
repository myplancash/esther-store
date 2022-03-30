import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/s1GgygY/hats.jpg"
    },
    {
      "id": 2,
      "title": "jeans",
      "imageUrl": "https://i.ibb.co/C1qGB0w/jeans.jpg"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/NrNSwdv/sneakers.jpg"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/wr0C5PM/womens.jpg"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/cwM6fjg/mens.jpg"
    }
  ]
  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
}

export default Home;