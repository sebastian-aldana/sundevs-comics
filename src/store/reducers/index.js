import { combineReducers } from "redux";
import issues from "./issues/issues.reducer";
import volumes from "./volumes/volumes.reducer";

export default combineReducers({
  issues,
  volumes,
});
