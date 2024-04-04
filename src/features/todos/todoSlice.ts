import { initialState } from '../../TodoAppState/todoAppState';
import { TypeTodosActions } from '../../types/todo-types';
import { TodoTypes } from '../../types/todo-types';
import { nextTodoId } from '../../nextTodoId';

export const todosReducer = (
  state = initialState,
  action: TypeTodosActions
) => {
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
    case TodoTypes.TOGGLED: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          } else {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
        }),
      };
    }
    case TodoTypes.DELETED: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }
    case TodoTypes.COMPLETED: {
      return state.todos.map((todo) => {
        return { ...todo, completed: true };
      });
    }
    default:
      return state;
  }
};
