import { Link } from 'react-router-dom';
import { ReactComponent as UnknownImage } from '../../assets/images/unknown-image.svg';
import ProductPrice from '../../components/ProductPrice';

import { Product } from '../../types/Product';

import './styles.css';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        {(product.imgUrl === "" ) ? <UnknownImage /> : <img src={product.imgUrl} alt={product.name} />}
      </div>
      <div className="card-bottom-container">
        <h6>{product.name}</h6>
        <ProductPrice price={product.price} />
      </div>
    </div>
  );
};

export default ProductCard;

