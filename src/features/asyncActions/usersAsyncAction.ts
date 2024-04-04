import { Dispatch } from 'redux';
import { addedManyCustomersAction } from '../customers/customersSlice';
import { ICustomer } from '../../types/customers-types';

export const getUsersFromServerAction = (): any => {
  return async (dispatch: Dispatch<any>): Promise<any> => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const result: ICustomer[] = await response.json();
      dispatch(addedManyCustomersAction(result));
    } catch (error) {
      dispatch(addedManyCustomersAction([]));
      console.error('Failed to fetch users:', error);
      return error;
    }
  };
};
