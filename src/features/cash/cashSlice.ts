import {
  CashActions,
  TypeCashActions,
  initialState,
} from '../../types/cash-types';

export const cashReducer = (state = initialState, action: TypeCashActions) => {
  switch (action.type) {
    case CashActions.ADD:
      return {
        ...state,
        cash: state.cash + action.payload,
      };
    case CashActions.GET:
      return {
        ...state,
        cash: state.cash - action.payload,
      };
    case CashActions.MULTIPLE:
      return {
        ...state,
        cash: state.cash * action.payload,
      };
    case CashActions.DIVIDE:
      return {
        ...state,
        cash: state.cash / action.payload,
      };
    default:
      return state;
  }
};

export const addedCashAction = (payload: number) => ({
  type: CashActions.ADD,
  payload,
});

export const getCashAction = (payload: number) => ({
  type: CashActions.GET,
  payload,
});

export const multipleCashAction = (payload: number) => ({
  type: CashActions.MULTIPLE,
  payload,
});

export const divideCashAction = (payload: number) => ({
  type: CashActions.DIVIDE,
  payload,
});
