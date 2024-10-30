import { getListAccountApi, addNewAccountApi } from "../../API/AccountApi";
import { FETCH_ACCOUNT_LIST } from "../Contant/AccountActionType";


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


            // Trong TH Backend trả về thông tin Account vừa tạo mới có thể xử lý theo hướng add Account
            // vừa tạo mới vào listAccount Redux ==> sẽ k cần call API lần nữa
        });
    };
};
