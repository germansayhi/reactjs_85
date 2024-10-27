import { api } from './api';

let getListDepartmentApi = () => {
    return api("GET", "departments", null);
};
export { getListDepartmentApi };