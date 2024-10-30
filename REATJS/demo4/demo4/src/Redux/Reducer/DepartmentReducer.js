import { FETCH_DEPARTMENT_LIST } from "../Contant/DepartmentActionType";

var initialState = [];


const DepartmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DEPARTMENT_LIST:
            //   console.log("payload: ", action.payload);
            state = action.payload;
            return [...state];


        default:
            return [...state];
    }
};


export default DepartmentReducer;