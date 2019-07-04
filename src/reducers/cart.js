import { updateState } from '@libs';

const initialState = {
  cart: {},
};

export default function handlePrice(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_CART':
      return updateState(state, action, 'cart');
    default:
      return state;
  }
}
