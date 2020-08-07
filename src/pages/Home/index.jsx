import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { ProductList } from './styles'
import { MdAddShoppingCart } from 'react-icons/md'
import api from '../../services/api'
import { formatPrice } from '../../util/format'
import { addToCard } from '../../store/modules/cart/actions'

const Home = ({ dispatch, cartSize }) => {
  const [products, setProducts] = useState([])



  useEffect(() => {
    async function componentDidMount() {
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }))
      setProducts([...data])
    }
    componentDidMount();
  }, [])


  return (
    <ProductList>
      {products.map(item => (
        <li key={item.id}>
          <img src={item.image} alt="Tênis" />
          <strong>{item.title}</strong>
          <span>R$ {item.priceFormatted}</span>
          <button type='button' onClick={() => dispatch(addToCard(item))} >
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> {cartSize}
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      )
      )}

    </ProductList>
  )
}
export default connect(state => ({
  cartSize: state.cart.length,
}))(Home);