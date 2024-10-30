import { combineReducers } from 'redux';
import { formReducer } from './FormReducer';
import AccountReducer from './AccountReducer';
import DepartmentReducer from './DepartmentReducer';
import PositionReducer from './PositionReducer';

let RootReducer = combineReducers({
    //
    formReducer: formReducer,
    listAccount: AccountReducer,
    listDepartment: DepartmentReducer,
    listPosition: PositionReducer,
});
export default RootReducer;
