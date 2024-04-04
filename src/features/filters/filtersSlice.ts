import { initialState } from '../../TodoAppState/todoAppState';
import { TypeTodosActions } from '../../types/todo-types';
import { TodoTypes } from '../../types/todo-types';

export const filterReducer = (
  state = initialState,
  action: TypeTodosActions
) => {
  switch (action.type) {
    case TodoTypes.STATUSFILTERCHANGED: {
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };
    }
    case TodoTypes.COLORSFILTERCHANGED: {
      let { color, changeType } = action.payload;
      const colors = state.filters.colors;
      switch (changeType) {
        case 'added': {
          if (colors.includes(color)) {
            return state;
          }
          return {
            ...state,
            colors: state.filters.colors.concat(color),
          };
        }
        case 'removed': {
          return {
            ...state,
            colors: state.filters.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };
        }
        default:
          return state;
      }
    }
    default:
      return state;
  }
};
