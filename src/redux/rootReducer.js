import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducers";
import { homeReducer } from "./reducers/homeReducers";
import userReducer from "./reducers/userReducers";
import passwordReducer from "./reducers/passwordReducers";

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  user: userReducer,
  password: passwordReducer,
});

export default rootReducer;
