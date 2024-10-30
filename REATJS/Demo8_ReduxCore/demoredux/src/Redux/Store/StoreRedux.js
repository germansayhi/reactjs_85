import { createStore } from "redux";
import { RootReducer } from "../Reduces/rootReducer";

let storeRedux = createStore(RootReducer);
export { storeRedux }