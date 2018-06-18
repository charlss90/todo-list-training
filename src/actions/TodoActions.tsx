import { Todo, TodoActionEnum } from "../models";

export default {
  create(newTodo: Todo) {
    return { type: TodoActionEnum.Create, newTodo };
  }
}