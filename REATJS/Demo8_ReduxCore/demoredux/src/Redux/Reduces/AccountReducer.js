import { ADD_NEW_ACCOUNT } from "../Contants/accountActionType";

let intinalState = {
    listAccounts: [],

};

// Bước 2:  Khai báo ra Reducer
let accountReducer = (state = intinalState, action) => {
    switch (action.type) {
        case ADD_NEW_ACCOUNT:
            // Lấy đc acc cần thêm
            let acc = action.account1;
            let listAccount_New = state.listAccounts;
            listAccount_New.push(acc);
            return {
                ...state,
                listAccounts: listAccount_New,
            };

        default:
            return { ...state };
    }
};
export { accountReducer }