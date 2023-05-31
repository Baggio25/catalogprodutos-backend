import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';

import { SpringPage } from 'types/vendor/spring';
import { Product } from 'types/Product';
import { requestBackend } from 'util/requests';

import ProductCrudCard from 'pages/Admin/Products/ProductCrudCard';

import './styles.css';

const List = () => {
  const [page, setPage] = useState<SpringPage<Product>>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div className="product-crud-container">
      <div className="product-crud-bar-container">
        <Link to="/admin/products/create">
          <button className="btn btn-primary text-with btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <div className="base-card product-filter-container">search bar</div>
      </div>
      <div className="row">
        {page &&
          page.content.map((product) => (
            <div key={product.id} className="col-sm-6 col-md-12">
              <ProductCrudCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;
