import { Todo } from "./Todo";

export interface TodoAction {
  type: string;
  newTodo?: Todo;
}