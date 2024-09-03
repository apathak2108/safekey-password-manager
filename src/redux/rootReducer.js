import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducers";
import { homeReducer } from "./reducers/homeReducers";
import userReducer from "./reducers/userReducers";

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  user: userReducer,
});

export default rootReducer;
