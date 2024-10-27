import { actionAddNewAccount } from "./Actions/accountAction";
import { actionCloseInputForm, actionShowInputForm } from "./Actions/formAction";
import { storeRedux } from "./Store/StoreRedux";

// import { createStore } from "redux";
console.log("----------Demo Redux-----------");
// Giả lâp có 1 số start: showForm, listAccounts => Quản lí và thay đổi các state bằng Redux

// Bước 3: Khai báo các State cần quản lý
// let intinalState = {
//     showForm: false,
//     listAccounts: [],

// };

// // Bước 2:  Khai báo ra Reducer
// let reducer = (state = intinalState, action) => {
//     switch (action.type) {
//         case "SHOW_INPT_FROM":
//             //
//             return {
//                 ...state,
//                 showForm: true,
//             };
//         case "CLOSE_INPUT_FORM":
//             //
//             return {
//                 ...state,
//                 showForm: false,
//             };
//         case "ADD_NEW_ACCOUNT":
//             // Lấy đc acc cần thêm
//             let acc = action.account1;
//             let listAccount_New = state.listAccounts;
//             listAccount_New.push(acc);
//             return {
//                 ...state,
//                 listAccounts: listAccount_New,
//             };

//         default:
//             return { ...state };
//     }
// };

// Bước 1: Tao ra Store Redux
// let storeRedux = createStore(reducer);

// Thay đổi các giá trị của State
// SHOW_INPT_FROM

// Bước 4: khai báo Action SHOW_INPT_FROM
// Action trong redux được thể hiên dưới dang Object
// let actionShowInputForm = {
//     type: "SHOW_INPT_FROM",
// };
//
console.log("State showForm ban đầu:  " + storeRedux.getState());

storeRedux.dispatch(actionShowInputForm());
//
console.log(
    "State showForm trước khi Dispath actionShowInputForm:  " +
    storeRedux.getState()
);

// Action ấn Input Form

// let actionCloseInputForm = {
//     type: "CLOSE_INPUT_FORM",
// };
storeRedux.dispatch(actionCloseInputForm());
//
console.log(
    "State showForm sau khi Dispath actionShowInputForm:  " +
    storeRedux.getState()
);

let account1 = {
    id: 1,
    name: 'duc',
    departmentId: 1,
    positionId: 1
}
let account2 = {
    id: 2,
    name: 'duc',
    departmentId: 1,
    positionId: 1
}

storeRedux.dispatch(actionAddNewAccount(account1));

console.log(
    "State sau khi Dispath actionAddNewAccount:  " +
    storeRedux.getState()
);


storeRedux.dispatch(actionAddNewAccount(account2));

console.log(
    "State sau khi Dispath actionAddNewAccount2:  " +
    storeRedux.getState()
);
