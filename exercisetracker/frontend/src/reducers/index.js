import { combineReducers } from "redux";
import exercises from "./exercises";
import messages from "./messages";
import errors from "./errors";
import auth from "./auth";

export default combineReducers({
  exercises,
  errors,
  messages,
  auth,
});
