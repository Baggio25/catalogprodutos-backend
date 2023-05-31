import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';

import { Product } from 'types/Product';
import { requestBackend } from 'util/requests';

import FeedbackMessage from 'components/FeedbackMessage';

import './styles.css';

const Form = () => {

  const {register, handleSubmit, formState: { errors }} = useForm<Product>();
  const history = useHistory();

  const onSubmit = (product: Product) => {
    const data = {...product, categories: [ {id: 1, name: ""} ] }

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/products',
      data,
      withCredentials: true      
    };

    requestBackend(config)
      .then((response) => {
        console.log(response.data)
      })
  };

  const handleCancel = () => {
    history.push("/admin/products");
  }

  return (
    <div className="product-crud-container">
      <div className="base-card product-crud-form-card">
        <h1 className="product-crud-form-title">DADOS DO PRODUTO</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row product-crud-inputs-container">
            <div className="col-lg-6 product-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <label className="form-label">
                  Nome*
                </label>
                <div className="mb-4">
                  <input
                    {...register('name', {
                      required: 'Campo obrigatório'
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
                <label className="form-label">
                  Preço*
                </label>
                <div className="mb-4">
                  <input
                    {...register('price', {
                      required: 'Campo obrigatório'
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
              <label className="form-label">
                Descrição*
              </label>
              <div>
                <textarea
                  {...register('description', {
                    required: 'Campo obrigatório'
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
