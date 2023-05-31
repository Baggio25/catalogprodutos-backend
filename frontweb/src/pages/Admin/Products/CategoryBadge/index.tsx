import { Category } from 'types/Category';
import './styles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'util/requests';

type Props = {
  cats: Category[];
};

const CategoryBadge = ({ cats }: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    let categoryId = cats.map(category => category.id);
    axios.get(`${BASE_URL}/categories/${categoryId}`).then((response) => {
      setCategories(response.data);
    });
  }, []);

  return <div>{categories?.map((category) => console.log(category.name))}</div>;
};

export default CategoryBadge;
