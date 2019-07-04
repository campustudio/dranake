import { updateState } from '@libs';

const initialState = {
  msg: {},
};

export default function handlePrice(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_MSG':
      return updateState(state, action, 'msg');
    default:
      return state;
  }
}
