import { updateState } from '@libs';

const initialState = {
  garageInfo: {},
};

export default function handlePrice(state = initialState, action) {
  switch (action.type) {
    case 'GET_GARAGE_INFO':
      return updateState(state, action, 'garageInfo');
    default:
      return state;
  }
}
