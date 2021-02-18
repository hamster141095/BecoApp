import { combineReducers } from "redux";
import itemsReducer from "./ItemsReducer";

const appReducers = combineReducers({
    itemsReducer,
});

export default appReducers;
