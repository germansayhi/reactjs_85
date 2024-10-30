import { api } from './api';

let getListAccountApi = () => {
    return api("GET", "accounts", null);
}

let addNewAccountApi = (accountParam) => {
    return api("POST", "accounts", accountParam);
};
let UpdateAccountApi = (accountParam) => {
    return api("UPDATE", "accounts", accountParam);
};
export { getListAccountApi, addNewAccountApi, UpdateAccountApi };