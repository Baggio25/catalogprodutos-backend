import { ReactComponent as Arrow } from '../../assets/images/arrow.svg';

import './styles.css';

const ButtonIcon = () => {
  return (
    <div className="btn-container">
      <button className="btn btn-primary">
        <h6>INICIE AGORA A SUA BUSCA</h6>
      </button>
      <div className="btn-icon-container">
        <Arrow />
      </div>
    </div>
  );
};

export default ButtonIcon;
