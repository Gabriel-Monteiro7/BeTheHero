import { combineReducers } from "redux";
import auth from "./auth/redurce";
import user from "./user/redurce";
import incident from "./incident/redurce";

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  auth,
  user,
  incident
});

export default reducers;
