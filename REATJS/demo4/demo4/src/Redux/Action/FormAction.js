import { CLOSE_INPUT_FORM, SHOW_INPT_FROM } from "../Contant/FormActionType";


let actionShowInputForm = () => {
    return {
        type: SHOW_INPT_FROM,
    };
};

let actionCloseInputForm = () => {
    return {
        type: CLOSE_INPUT_FORM,
    }
};

export { actionShowInputForm, actionCloseInputForm }