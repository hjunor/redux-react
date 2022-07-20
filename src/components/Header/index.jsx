import React from "react";
import { connect } from "react-redux";
import { Container, Cart } from "./styles";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
const Header = ({ cart }) => {
  const amount = cart.reduce((sum, items) => {
    return items.amount + sum;
  }, 0);
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{amount} itens </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};
export default connect((state) => ({
  cart: state.cart,
}))(Header);
