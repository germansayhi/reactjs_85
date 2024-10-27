import { api } from './api';

let getListPositionApi = () => {
    return api("GET", "possitions", null);
};
export { getListPositionApi };