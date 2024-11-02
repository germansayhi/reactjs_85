import { FETCH_ACCOUNT_UPDATE_INFO, TOGLE_FORM_UPATE } from "../Contant/UpdateAccount";


export const actionTogleFormRedux = () => {
    return {
        type: TOGLE_FORM_UPATE,
    };
};


// Lưu thông tin của Account Update lên redux
export const actionFetchAccountUpdateInfoRedux = (accountUpdate) => {
    return {
        type: FETCH_ACCOUNT_UPDATE_INFO,
        payload: accountUpdate,
    };
};
