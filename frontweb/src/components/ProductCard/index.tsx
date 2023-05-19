
import ProductImg from "../../assets/images/product.png";

import "./styles.css";

const ProductCard = () => {
    return(
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ProductImg} alt="produto" />
            </div>
            <div className="card-bottom-container">
                <h6>Nome do Produto</h6>
                <p>1200.23</p>
            </div>
        </div>
    )
}

export default ProductCard;