import produce from "immer";
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : [];
export default function cart(state = shippingAddressFromStorage, action) {
  switch (action.type) {
    case "@cart/ADD":
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.product.id);
        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    case "@cart/REMOVE":
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case "@cart/UPDATE_AMOUNT_SUCCESS": {
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);

          if (draft[productIndex].amount <= 0) {
            draft.splice(productIndex, 1);
          }
        }
      });
    }
    default:
      return state;
  }
}
