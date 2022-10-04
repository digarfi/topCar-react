
import UpperImage from "assets/images/audihatch.svg";
import "./styles.css";
import ButtonIcon from "components/ButtonIcon";
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <>
    
      <div className="home-container">
        <div className="uppercard bg-secondary">
          <div className="uppercard-lower">
            <h1>O carro perfeito para você</h1>
            <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
          </div>

          <div className="image-container">
            <img id="image" src={UpperImage} alt="Audi Hatch"  />
          </div>

        </div>

        <div className="lowercard">


            <div className="button">
                <Link to ="/products">
                  <ButtonIcon />
               </Link>
            </div>

            <div className="lowercard-txt">
              <p>Comece agora a navegar</p>
            </div>

        </div>
      </div>
    </>
  );
};

export default Home;
