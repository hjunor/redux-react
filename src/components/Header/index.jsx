import React from "react";
import { connect } from "react-redux";
import { Container, Cart } from "./styles";
import { Link } from "react-router-dom";
import { BsFillBagCheckFill } from "react-icons/bs";
import { Logo } from "../Logo";
const Header = ({ cart }) => {
  const amount = cart.reduce((sum, items) => {
    return items.amount + sum;
  }, 0);
  return (
    <Container>
      <Link to="/">
        <Logo width="12rem" height="160px" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{amount} itens </span>
        </div>
        <BsFillBagCheckFill size={36} color="var(--green)" />
      </Cart>
    </Container>
  );
};
export default connect((state) => ({
  cart: state.cart,
}))(Header);
