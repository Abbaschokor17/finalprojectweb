import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label } from 'reactstrap';

const Navbar = ({ click }) => {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>Guide Trip Lebanon</h2>
      </div>

      <ul className="navbar__links">
      <li>
        <Link to="/Login" >Login/abbas</Link>
      </li>
      <li>
        <Link to="/Gallery">Gallery</Link>
      </li>
        <li>
        <Link to="/ContactUs">AboutUs</Link>
        </li>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Book</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;