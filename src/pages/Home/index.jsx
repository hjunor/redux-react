import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ProductList } from "./styles";
import api from "../../services/api";
import { formatPrice } from "../../util/format";
import { addToCard } from "../../store/modules/cart/actions";
import { Card } from "../../components/Card";

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
        <Card
          item={item}
          dispatch={dispatch}
          addToCard={addToCard}
          cartSizeProduct={cartSizeProduct}
        />
      ))}
    </ProductList>
  );
};
export default connect((state) => ({
  cart: state.cart,
}))(Home);
