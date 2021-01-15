import { combineReducers } from "redux";
import issues from "./issues/issues.reducer";
import volumes from "./volumes/volumes.reducer";
import concepts from "./concepts/concepts.reducer";
import characters from "./characters/characters.reducer";
import locations from "./locations/locations.reducer";
import feedback from "./feedback-provider/feedback.reducer";

export default combineReducers({
  issues,
  volumes,
  concepts,
  characters,
  locations,
  feedback,
});
