import ProductCard from "components/ProductCard";
import SearchButton from "components/SearchButton";
import "./styles.css";

const Catalog = () => {
  return (
    <>
    <div className="home-master">
      <div>
        <SearchButton />
      </div>

      <div className="container my-4 home-container">
        <div className="row ">
          <div className="col-md-6 col-xl-4">
            <ProductCard />
          </div>
          <div className=" col-md-6 col-xl-4">
            <ProductCard />
          </div>
          <div className=" col-md-6 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-md-6 col-xl-4">
            <ProductCard />
          </div>
          <div className=" col-md-6 col-xl-4">
            <ProductCard />
          </div>
          <div className=" col-md-6 col-xl-4">
            <ProductCard />
          </div>
        </div>
      </div>

      </div>
    </>
  );
};
export default Catalog;
