import { combineReducers } from 'redux';

import userReducer from './user';
import priceReducer from './price';
import garageReducer from './garage';
import cartReducer from './cart';
import msgReducer from './msg';

export default combineReducers({
  userReducer,
  priceReducer,
  garageReducer,
  cartReducer,
  msgReducer,
});
