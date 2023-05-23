import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import ProductPrice from '../../components/ProductPrice';
import ProductInfoLoader from '../../pages/ProductDetails/ProductInfoLoader';
import ProductDetailsLoader from '../../pages/ProductDetails/ProductDetailsLoader';
import { Product } from '../../types/Product';
import { BASE_URL } from 'util/requests';

import { ReactComponent as ArrowIcon } from '../../assets/images/arrow.svg';
import { ReactComponent as UnknownImage } from '../../assets/images/unknown-image.svg';

import './styles.css';

type UrlParams = {
  productId: string;
};

const ProductDetails = () => {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(false);

  const { productId } = useParams<UrlParams>();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <div className="product-details-container">
      <div className="base-card product-details-card">
        <Link to="/products">
          <div className="goback-container">
            <ArrowIcon />
            <h2>VOLTAR</h2>
          </div>
        </Link>
        <div className="row">
          <div className="col-xl-6">
            {isLoading ? (
              <ProductInfoLoader />
            ) : (
              <>
                <div className="img-container">
                  {product?.imgUrl === '' ? (
                    <UnknownImage />
                  ) : (
                    <img src={product?.imgUrl} alt={product?.name} />
                  )}
                </div>
                <div className="name-price-container">
                  <h1>{product?.name}</h1>
                  {product && <ProductPrice price={product?.price} />}
                </div>
              </>
            )}
          </div>
          <div className="col-xl-6">
            {isLoading ? (
              <ProductDetailsLoader />
            ) : (
              <div className="description-container">
                <h2>Descrição do produto</h2>
                <p>{product?.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
