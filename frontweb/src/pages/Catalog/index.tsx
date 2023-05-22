import { Product } from '../../types/Product';
import ProductCard from '../../components/ProductCard';

const Catalog = () => {
  const product: Product = {
    id: 27,
    name: 'Xbox series s',
    description: 'The new generation Xbox video game',
    price: 2360.0,
    imgUrl: 'The new generation Xbox video game',
    date: '2023-05-16T14:56:00Z',
    categories: [
      {
        id: 5,
        name: 'Game - Console',
      },
      {
        id: 2,
        name: 'Eletrônicos',
      },
    ],  
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard product={product} />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard product={product} />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard product={product} />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard product={product} />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard product={product} />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
