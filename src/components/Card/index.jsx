import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

export function Card({ item, dispatch, addToCard, cartSizeProduct }) {
  return (
    <li key={item.id}>
      <img src={item.image} alt="Tênis" />
      <strong>{item.title}</strong>
      <span>R$ {item.priceFormatted}</span>
      <button type="button" onClick={() => dispatch(addToCard(item))}>
        <div>
          <BsFillCartPlusFill size={16} color="#FFF" />{" "}
          {cartSizeProduct(item.id)}
        </div>
        <span>Adicionar ao carrinho</span>
      </button>
    </li>
  );
}
