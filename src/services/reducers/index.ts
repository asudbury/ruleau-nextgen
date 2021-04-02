import { combineReducers } from "redux";
import {
  userReducer,
  casesReducer,
  caseOverrideUpdateReducer,
} from "../slices";

export default combineReducers({
  user: userReducer,
  cases: casesReducer,
  caseOverrideUpdate: caseOverrideUpdateReducer,
});
