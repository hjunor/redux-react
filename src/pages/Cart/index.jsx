import React from 'react';
import { connect } from 'react-redux'
import { Container, Total, ProductTable } from './styles.jsx'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { removeFromCart } from '../../store/modules/cart/actions'
const Cart = ({ cart, dispatch }) => {
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
            {cart.map(product => (

              <tr>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </td>
                <td>
                  <div>
                    <button type="button">
                      <MdRemoveCircleOutline size={20} color='#7159c1' />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button type="button">
                      <MdAddCircleOutline size={20} color='#7159c1' />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>R$ 258,80</strong>
                </td>
                <td>
                  <button type='button'
                    onClick={() =>
                      dispatch(removeFromCart(product.id))
                    }>
                    <MdDelete size={15} color="#7159c1" />
                  </button>
                </td>
              </tr>

            ))}
          </tbody>
        </thead>
      </ProductTable>
      <footer>
        <button type='button'> finalizar pedido</button>
        <Total>
          <span>Total</span>
          <strong>R$ 1920,28</strong>
        </Total>
      </footer>
    </Container>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})
export default connect(mapStateToProps)(Cart);