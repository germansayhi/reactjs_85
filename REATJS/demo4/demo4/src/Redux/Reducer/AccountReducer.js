import { FETCH_ACCOUNT_LIST } from "../Contant/AccountActionType";
import { DELETE_ACCOUNT } from "../Contant/DeleteActionType";

let initialState = [];


const AccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ACCOUNT_LIST:
            //   console.log("payload: ", action.payload);
            state = action.payload;
            return [...state];


        default:
            return [...state];

        case DELETE_ACCOUNT:
            let idDelete = action.payload;
            let listAccountState = state;
            let indexDelete = listAccountState.findIndex(
                (account) => account.id === idDelete
            );
            listAccountState.splice(indexDelete, 1);


            return listAccountState;
    }
};


export default AccountReducer;