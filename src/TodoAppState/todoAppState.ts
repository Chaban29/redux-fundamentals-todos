export type TypeTodoFilters = IFilters;
export type TypeTodo = ITodo[];

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
  color?: string;
}

export interface IFilters {
  status: string;
  colors: Array<string>;
}

export interface ITodoAppState {
  todos: TypeTodo;
  filters: TypeTodoFilters;
}

export const initialState: ITodoAppState = {
  todos: [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' },
  ],
  filters: {
    status: 'Active',
    colors: ['red', 'blue'],
  },
};
