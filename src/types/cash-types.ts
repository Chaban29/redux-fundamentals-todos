export interface ICash {
  cash: number;
}

export const enum CashActions {
  ADD = 'cash/added',
  GET = 'cash/get',
  MULTIPLE = 'cash/multiple',
  DIVIDE = 'cash/divide',
}

export type TypeCashActions =
  | { type: CashActions.ADD; payload: number }
  | { type: CashActions.GET; payload: number }
  | { type: CashActions.MULTIPLE; payload: number }
  | { type: CashActions.DIVIDE; payload: number };

export const initialState: ICash = { cash: 50 };
