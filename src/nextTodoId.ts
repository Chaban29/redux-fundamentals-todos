import { ITodo } from './TodoAppState/todoAppState';

interface INextTodoId {
  currentTodos: ITodo[];
}

export const nextTodoId = (todos: INextTodoId): number => {
  const maxId = todos.currentTodos.reduce(
    (maxId: number, todo: ITodo) => Math.max(todo.id, maxId),
    0
  );
  return maxId + 1;
};
