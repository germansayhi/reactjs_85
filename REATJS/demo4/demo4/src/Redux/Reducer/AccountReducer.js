import { FETCH_ACCOUNT_LIST } from "../Contant/AccountActionType";

let initialState = [];


const AccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ACCOUNT_LIST:
            //   console.log("payload: ", action.payload);
            state = action.payload;
            return [...state];


        default:
            return [...state];
    }
};


export default AccountReducer;