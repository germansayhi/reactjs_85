import { FETCH_POSITION_LIST } from "../Contant/PositionActionType";


var initialState = [];


const PositionReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSITION_LIST:
            //   console.log("payload: ", action.payload);
            state = action.payload;
            return [...state];


        default:
            return [...state];
    }
};


export default PositionReducer;