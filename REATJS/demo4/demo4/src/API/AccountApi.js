import { api } from './api';

let getListAccountApi = () => {
    return api("GET", "accounts", null);
};

let addNewAccountApi = (accountParam) => {
    return api("POST", "accounts", accountParam);
};

const updateAccountApi = (accountUpdate) => {
    let url = "accounts/" + accountUpdate.id;
    return api("PUT", url, accountUpdate.account_Update);
};


let deleteAccountApi = (accountId) => {
    return api("DELETE", `accounts/${accountId}`, null); // truyền ID vào URL
};

export { getListAccountApi, addNewAccountApi, updateAccountApi, deleteAccountApi };