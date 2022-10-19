/**
 * @file root reducer
 * @date 2020-09-22
 * @author Frank
 * @lastModify Frank 2020-09-22
 */
import { combineReducers } from "redux";
import LoginReducer from "./Login/reducer";
import GlobalDataReducer from "./GlobalData/reducer";

// combine all the reducer in here
const rootReducer = combineReducers({
    LoginReducer,
    GlobalDataReducer,
});

// combine all the reducer in here
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
