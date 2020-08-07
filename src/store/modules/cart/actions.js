export function addToCard(product) {
  return {
    type: '@cart/ADD',
    product,
  }
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  }
}
export function removeAmount(id) {
  return {
    type: 'REMOVE_FROM_CART',
    id,
  }
}