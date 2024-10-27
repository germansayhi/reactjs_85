import { combineReducers } from 'redux';
import { formReducer } from './formReducer';
import { accountReducer } from './AccountReducer';
let RootReducer = combineReducers({
    formReducer: formReducer,
    accountReducer: accountReducer
});

export { RootReducer };
