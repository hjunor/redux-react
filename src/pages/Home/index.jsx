import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ProductList } from "./styles";
import { MdAddShoppingCart } from "react-icons/md";
import api from "../../services/api";
import { formatPrice } from "../../util/format";
import { addToCard } from "../../store/modules/cart/actions";

const Home = ({ dispatch, cart }) => {
  const [products, setProducts] = useState([]);

  localStorage.setItem("shippingAddress", JSON.stringify(cart));

  useEffect(() => {
    async function componentDidMount() {
      const { data } = await api.get("products");
      const products = data.products.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts([...products]);
    }
    componentDidMount();
  }, []);

  function cartSizeProduct(id) {
    return cart.map((item) => item.id === id && item.amount);
  }
  return (
    <ProductList>
      {products.map((item) => (
        <li key={item.id}>
          <img src={item.image} alt="Tênis" />
          <strong>{item.title}</strong>
          <span>R$ {item.priceFormatted}</span>
          <button type="button" onClick={() => dispatch(addToCard(item))}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />{" "}
              {cartSizeProduct(item.id)}
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
};
export default connect((state) => ({
  cart: state.cart,
}))(Home);
