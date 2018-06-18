import { TodoState, TodoAction, TodoActionEnum } from "../models";

const initialState: TodoState = {
  items: [
    { title: "Developing", complete: false }
  ]
}

export default (state: TodoState = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionEnum.Create:
      let items = [...state.items];
      if (action.newTodo) {
        items.push(action.newTodo);
      }
      return {
        ...state,
        items
      };
    default:
      return state;
  }
}