import { ADD_NEW_ACCOUNT } from "../Contants/accountActionType";

let actionAddNewAccount = (acc) => {
    return {
        type: ADD_NEW_ACCOUNT,
        account: acc
    };
}
export { actionAddNewAccount }
