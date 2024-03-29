import React from "react";
import { connect } from "react-redux";
import { Container, Total, ProductTable } from "./styles.jsx";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";
import {
  removeFromCart,
  updateAmountSuccess,
} from "../../store/modules/cart/actions";
import { formatPrice } from "../../util/format.js";
const Cart = ({ cart, dispatch }) => {
  localStorage.setItem("shippingAddress", JSON.stringify(cart));

  const total = cart.reduce((sum, item) => {
    return item.amount * item.price + sum;
  }, 0);
  const priceProduct = (id) => {
    return cart.reduce((sum, item) => {
      if (item.id === id) {
        return item.price * item.amount;
      }
      return sum;
    }, 0);
  };
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </td>
                <td>
                  <div>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          updateAmountSuccess(product.id, product.amount - 1)
                        )
                      }
                    >
                      <MdRemoveCircleOutline size={20} color="var(--green)" />
                    </button>
                    <input type="number" readOnly value={product.amount} />

                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          updateAmountSuccess(product.id, product.amount + 1)
                        )
                      }
                    >
                      <MdAddCircleOutline size={20} color="var(--green)" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{formatPrice(priceProduct(product.id))}</strong>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => dispatch(removeFromCart(product.id))}
                  >
                    <MdDelete size={15} color="var(--green)" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </thead>
      </ProductTable>
      <footer>
        <button type="button" disabled={total >= 0 ? true : false}>
          finalizar pedido
        </button>
        <Total>
          <span>Total</span>
          <strong>{formatPrice(total)}</strong>
        </Total>
      </footer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});
export default connect(mapStateToProps)(Cart);
