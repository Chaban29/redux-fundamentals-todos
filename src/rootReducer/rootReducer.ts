import { combineReducers } from 'redux';
import { todosReducer } from '../features/todos/todoSlice';
import { filterReducer } from '../features/filters/filtersSlice';

export const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
