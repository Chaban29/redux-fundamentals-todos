export interface ICustomer {
  id: number;
  name: string;
}

export interface ICustomers {
  customers: ICustomer[];
}

export const customers: ICustomers = {
  customers: [{ id: 0, name: 'Roman' }],
};

export const enum CustomersActions {
  ADDED = 'customers/addCustomer',
  DELETED = 'customers/deleteCustomer',
  ADDEDMANYCUSTOMERS = 'customers/addManyCustomers',
}

export type TypeCustomersActions =
  | { type: CustomersActions.ADDED; payload: ICustomer }
  | { type: CustomersActions.DELETED; payload: number }
  | {
      type: CustomersActions.ADDEDMANYCUSTOMERS;
      payload: ICustomer[];
      customerName: string;
    };
