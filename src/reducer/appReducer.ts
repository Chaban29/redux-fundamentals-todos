import { initialState } from '../TodoAppState/todoAppState';
import { nextTodoId } from '../nextTodoId';
import { TodoTypes, TypeTodosActions } from '../types/todo-types';

export const appReducer = (state = initialState, action: TypeTodosActions) => {
  switch (action.type) {
    case TodoTypes.ADDED: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId({ currentTodos: state.todos }),
            text: action.payload,
            completed: false,
          },
        ],
      };
    }
    default:
      return state;
  }
};
