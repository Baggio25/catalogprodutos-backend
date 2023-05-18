
import { ReactComponent as MainImage } from "../../assets/images/main-image.svg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-content-container">
            <h2>Conhceça o melhor catálogo de produtos</h2>
        </div>
        <div className="home-image-container">
            <MainImage />
        </div>
      </div>
    </div>
  );
};

export default Home;
