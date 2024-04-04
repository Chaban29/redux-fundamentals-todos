import { combineReducers } from 'redux';
import { todosReducer } from '../features/todos/todoSlice';
import { filterReducer } from '../features/filters/filtersSlice';
import { cashReducer } from '../features/cash/cashSlice';
import { customersReducer } from '../features/customers/customersSlice';

export const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filterReducer,
  cash: cashReducer,
  customers: customersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
