import { getListPositionApi } from "../../API/PositionApi";
import { FETCH_POSITION_LIST } from "../Contant/PositionActionType";



// Viết các Action liên quan đến Call API
export const actionFetchListPositionAPI = () => {
    return (dispatch) => {
        return getListPositionApi().then((response) => {
            //  console.log("reponseAPI:", response);
            dispatch(actionFetchListPositionRedux(response));
        });
    };
};
export const actionFetchListPositionRedux = (listPosition) => {
    return {
        type: FETCH_POSITION_LIST,
        payload: listPosition,
    };
};


