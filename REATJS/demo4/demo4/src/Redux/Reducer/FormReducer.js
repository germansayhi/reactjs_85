import { CLOSE_INPUT_FORM, SHOW_INPT_FROM } from "../Contant/FormActionType";


let intinalState = {
    showForm: false,


};
// Bước 2:  Khai báo ra Reducer
let formReducer = (state = intinalState, action) => {
    switch (action.type) {
        case SHOW_INPT_FROM:
            //
            return {
                ...state,
                showForm: true,
            };
        case CLOSE_INPUT_FORM:
            //
            return {
                ...state,
                showForm: false,
            };

        default:
            return { ...state };
    }
};
export { formReducer }