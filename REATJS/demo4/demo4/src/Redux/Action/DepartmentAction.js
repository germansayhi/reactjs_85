import { FETCH_DEPARTMENT_LIST } from "../Contant/DepartmentActionType";
import { getListDepartmentApi } from "../../API/DepartmentApi";


// Viết các Action liên quan đến Call API
export const actionFetchListDepartmentAPI = () => {
    return (dispatch) => {
        return getListDepartmentApi().then((response) => {
            //  console.log("reponseAPI:", response);
            dispatch(actionFetchListDepartmentRedux(response));
        });
    };
};


export const actionFetchListDepartmentRedux = (listDepartment) => {
    return {
        type: FETCH_DEPARTMENT_LIST,
        payload: listDepartment,
    };
};