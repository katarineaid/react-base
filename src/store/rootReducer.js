import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import account from './account/accountReducer';


export default combineReducers({
  form: reduxFormReducer,
  account,
});
