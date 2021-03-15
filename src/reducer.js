import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions";

// function reducer(state, action) {
//   if (action.type === CLEAR_CART) {
//     return { ...state, cart: [] };
//   }
//   if (action.type === DECREASE) {
//     console.log("you decreased amount");
//   }
//   if (action.type === INCREASE) {
//     console.log("you increased amount");
//   }
//   if (action.type === REMOVE) {
//     return {
//       ...state,
//       cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
//     };
//   }

//   return state;
// }

function reducer(state, action) {
  console.log(state, action);
  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1, name: "anna" };
  }

  if (action.type === INCREASE) {
    console.log("you increased amount");
    return { ...state, count: state.count + 1 };
  }

  return state;
}

export default reducer;

// switch (action.type) {
//   case CLEAR_CART:
//     return { ...state, cart: [] };
//   default:
//     return state;
// }
