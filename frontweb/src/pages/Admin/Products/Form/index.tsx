import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';
import Select from 'react-select';

import { Product } from 'types/Product';
import { requestBackend } from 'util/requests';

import { Category } from 'types/Category';
import FeedbackMessage from 'components/FeedbackMessage';

import './styles.css';

type UrlParams = {
  productId: string;
};

const Form = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    setValue,
  } = useForm<Product>();

  const [selectCategories, setSelectCategories] = useState<Category[]>([]);
  const { productId } = useParams<UrlParams>();
  const history = useHistory();

  const isEditing = productId !== 'create';

  useEffect(() => {
    requestBackend({ url: "/categories" }).then((response) => {
      setSelectCategories(response.data.content);
    });
  }, []);

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `/products/${productId}` }).then((response) => {
        const product = response.data as Product;
        setValue('name', product.name);
        setValue('price', product.price);
        setValue('description', product.description);
        setValue('categories', product.categories);
        setValue('imgUrl', product.imgUrl);
      });
    } else {
      setValue('name', '');
      setValue('price', 0);
      setValue('description', '');
      setValue('categories', []);
      setValue('imgUrl', '');
      setFocus('name');
    }
  }, [isEditing, productId, setFocus, setValue]);

  const onSubmit = (product: Product) => {
    const data = {
      ...product,
      categories: isEditing ? product.categories : [{ id: 1, name: '' }],
    };

    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/products/${productId}` : '/products',
      data,
      withCredentials: true,
    };

    requestBackend(config).then(() => {
      history.push('/admin/products/create');
    });
  };

  const handleCancel = () => {
    history.push('/admin/products');
  };

  return (
    <div className="product-crud-container">
      <div className="base-card product-crud-form-card">
        <h1 className="product-crud-form-title">DADOS DO PRODUTO</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row product-crud-inputs-container">
            <div className="col-lg-6 product-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <label className="form-label">Nome*</label>
                <div className="mb-4">
                  <input
                    {...register('name', {
                      required: 'Campo obrigatório',
                    })}
                    type="text"
                    className={`form-control base-input ${
                      errors.name ? 'is-invalid' : ''
                    }`}
                    name="name"
                    autoFocus
                  />
                  <FeedbackMessage message={errors.name?.message} />
                </div>
              </div>
             
              <div className="margin-bottom-30">
                <label className="form-label">Categorias*</label>
                <div className="mb-4">
                  <Select
                    options={selectCategories}
                    classNamePrefix="product-crud-select"
                    getOptionLabel={
                        (category: Category) => category.id + " - " + category.name}
                    getOptionValue={(category: Category) => String(category.id)}
                    isMulti
                  />
                </div>
              </div>

              <div className="margin-bottom-30">
                <label className="form-label">Preço*</label>
                <div className="mb-4">
                  <input
                    {...register('price', {
                      required: 'Campo obrigatório',
                    })}
                    type="text"
                    className={`form-control base-input ${
                      errors.price ? 'is-invalid' : ''
                    }`}
                    name="price"
                  />
                  <FeedbackMessage message={errors.price?.message} />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <label className="form-label">Descrição*</label>
              <div>
                <textarea
                  {...register('description', {
                    required: 'Campo obrigatório',
                  })}
                  className={`form-control base-input h-auto ${
                    errors.description ? 'is-invalid' : ''
                  }`}
                  name="description"
                  rows={8}
                />
                <FeedbackMessage message={errors.description?.message} />
              </div>
            </div>
          </div>
          <div className="product-crud-buttons-container">
            <button
              className="btn btn-outline-danger product-crud-button"
              onClick={handleCancel}
            >
              CANCELAR
            </button>
            <button className="btn btn-primary product-crud-button text-white">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
