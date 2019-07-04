import { updateState } from '@libs';

const initialState = {
  taxIncluded: false,
};

export default function handlePrice(state = initialState, action) {
  switch (action.type) {
    case 'SWITCH_TAX_TYPE':
      return updateState(state, action, 'taxIncluded');
    default:
      return state;
  }
}
