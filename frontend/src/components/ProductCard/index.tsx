import "./styles.css";
import ProductImg from "assets/images/redaudi.png";

import PurchaseButton from "components/PurchaseButton";


const ProductCard = () => {
  return (
    <div className="home">
     
      <div className="home-container">
       

        <div className="card-container">
          <div>
            <img src={ProductImg} alt="Audi Supra TT" />
          </div>

          <div className="cardText">
            <h1>Audi Supra TT</h1>
            <p>
              Veiculo no mercado com quesito tecnológico, com painel todo
              eletrônico produzido pela Virtual Cockpit.{" "}
            </p>
          </div>

          <div className="purchase-button">
            <PurchaseButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
