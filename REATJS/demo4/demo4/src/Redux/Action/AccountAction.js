import { getListAccountApi, addNewAccountApi, deleteAccountApi, updateAccountApi } from "../../API/AccountApi";
import { FETCH_ACCOUNT_LIST } from "../Contant/AccountActionType";
import { DELETE_ACCOUNT } from "../Contant/DeleteActionType";


// Viết các Action liên quan đến Call API
export const actionFetchListAccountAPI = () => {
    return (dispatch) => {
        return getListAccountApi().then((response) => {
            //  console.log("reponseAPI:", response);
            dispatch(actionFetchListAccountRedux(response));
        });
    };
};


export const actionFetchListAccountRedux = (listAccount) => {
    return {
        type: FETCH_ACCOUNT_LIST,
        payload: listAccount,
    };
};
export const actionAddAccountAPI = (AccountNew) => {
    return (dispatch) => {
        return addNewAccountApi(AccountNew).then((response) => {
            // console.log("reponseAPI After add New Account:", response);
            // Sau khi thêm mới thành công thực hiện dispatch actionFetchListAccountAPI
            // để load lại danh sách Account cập nhật
            dispatch(actionFetchListAccountAPI());
        });
    };
};

export const actionDeleteAccountAPI = (id) => {
    return (dispatch) => {
        return deleteAccountApi(id).then((response) => {
            // console.log("response sau khi xóa Account: ", response);
            dispatch(actionDeleteAccountRedux(id));
        });
    };
};


export const actionDeleteAccountRedux = (idDelete) => {
    return {
        type: DELETE_ACCOUNT,
        payload: idDelete,
    };
};

export const actionUpdateAccountAPI = (accountUpdate_API) => {
    return (dispatch) => {
        return updateAccountApi(accountUpdate_API).then((response) => {
            // console.log("response sau khi xóa Account: ", response);
        });
    };
};

