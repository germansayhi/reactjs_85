import { combineReducers } from 'redux';
import { formReducer } from './FormReducer';
import AccountReducer from './AccountReducer';
import DepartmentReducer from './DepartmentReducer';
import PositionReducer from './PositionReducer';
import FormUpdate from './FormUpdateReducer';


let RootReducer = combineReducers({
    //
    formReducer: formReducer,
    listAccount: AccountReducer,
    listDepartment: DepartmentReducer,
    listPosition: PositionReducer,
    FormUpdate: FormUpdate,
});
export default RootReducer;
