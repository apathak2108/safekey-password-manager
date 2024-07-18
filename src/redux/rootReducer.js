import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducers";
import { homeReducer } from "./reducers/homeReducers";

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
});

export default rootReducer;
