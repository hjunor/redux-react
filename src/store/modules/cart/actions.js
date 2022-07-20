export function addToCard(product) {
  return {
    type: "@cart/ADD",
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: "@cart/REMOVE",
    id,
  };
}
export function removeAmount(id) {
  return {
    type: "REMOVE_FROM_CART",
    id,
  };
}
export function updateAmountSuccess(id, amount) {
  return {
    type: "@cart/UPDATE_AMOUNT_SUCCESS",
    id,
    amount,
  };
}
