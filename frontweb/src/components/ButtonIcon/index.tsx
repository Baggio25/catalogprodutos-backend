import { ReactComponent as Arrow } from '../../assets/images/arrow.svg';

import './styles.css';

type Props = {
  text: string;
}

const ButtonIcon = ({ text }: Props) => {
  return (
    <div className="btn-container">
      <button className="btn btn-primary">
        <h6>{text}</h6>
      </button>
      <div className="btn-icon-container">
        <Arrow />
      </div>
    </div>
  );
};

export default ButtonIcon;
