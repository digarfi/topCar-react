import "./styles.css";
import 'bootstrap/js/src/collapse.js'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
  
  
  const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary main-nav ">
      <div className="container-fluid">

      <Link to="/" className="nav-logo-text">
          <h4>Carros Top</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topcar-navbar"
          aria-controls="topcar-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="topcar-navbar">


          <ul className="navbar-nav offset-md-9 main-menu">

            <li>
            <NavLink to="/" activeClassName="active" exact>Home</NavLink>
            </li>
            
            <li>
            <NavLink to="/products" activeClassName="active">Catálago</NavLink>
            </li>

          </ul>
       
       
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
