import {
  CustomersActions,
  ICustomer,
  ICustomers,
  TypeCustomersActions,
  customers,
} from '../../types/customers-types';

export const initialState: ICustomers = customers;

export const customersReducer = (
  state = initialState,
  action: TypeCustomersActions
) => {
  switch (action.type) {
    case CustomersActions.ADDED:
      return {
        ...state,
        customers: [...state.customers, action.payload],
      };
    case CustomersActions.DELETED:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      };
    case CustomersActions.ADDEDMANYCUSTOMERS:
      return {
        ...state,
        customers: [...state.customers, ...action.payload],
      };
    default:
      return state;
  }
};

export const addedNewCustomerAction = (payload: ICustomer) => ({
  type: CustomersActions.ADDED,
  payload,
});

export const deletedCustomerAction = (payload: number) => ({
  type: CustomersActions.DELETED,
  payload,
});

export const addedManyCustomersAction = (payload: ICustomer[]) => ({
  type: CustomersActions.ADDEDMANYCUSTOMERS,
  payload,
});
