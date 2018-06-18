import { combineReducers } from "redux";
import { AppState } from "../models";
import todoReducer from "./todoReducer"

export default combineReducers<AppState>({
  todoState: todoReducer
})