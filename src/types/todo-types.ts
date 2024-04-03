export const enum TodoTypes {
  ADDED = 'todos/todoAdded',
  TOGGLED = 'todos/todoToggled',
  SELECTED = 'todos/todoSelected',
  DELETED = 'todos/todoDeleted',
  COMPLETED = 'todos/todoCompleted',
  STATUSFILTERCHANGED = 'todos/todoStatusFilterChanged',
  COLORSFILTERCHANGED = 'todos/todoColorFilterChanged',
}

export type TypeTodosActions =
  | { type: TodoTypes.ADDED; payload: string }
  | { type: TodoTypes.TOGGLED; payload: number }
  | { type: TodoTypes.SELECTED; payload: { todoId: number; color: string } }
  | { type: TodoTypes.DELETED; payload: number }
  | { type: TodoTypes.COMPLETED }
  | { type: TodoTypes.STATUSFILTERCHANGED }
  | { type: TodoTypes.COLORSFILTERCHANGED };
