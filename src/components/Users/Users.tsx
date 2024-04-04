import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../rootReducer/rootReducer';
import {
  addedNewCustomerAction,
  deletedCustomerAction,
} from '../../features/customers/customersSlice';
import { getUsersFromServerAction } from '../../features/asyncActions/usersAsyncAction';

let nextId: number = 1;

export const Users: FC = () => {
  const [customerName, setCustomerName] = useState<string>('');
  const dispatch = useDispatch();
  const customers = useSelector(
    (state: RootState) => state.customers.customers
  );

  const handleDeleteCustomer = (customerId: number) => {
    dispatch(deletedCustomerAction(customerId));
  };

  const addCustomer = (customerName: string) => {
    const customer = { id: nextId, name: customerName };
    dispatch(addedNewCustomerAction(customer));
    nextId++;
  };

  const handleAddNewCustomer = () => {
    if (customerName.trim() !== '') {
      addCustomer(customerName);
      setCustomerName('');
    }
  };

  useEffect(() => {
    console.log(customers);
  }, [customers]);

  const getUsersFromServer = async () => {
    try {
      await dispatch(getUsersFromServerAction());
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  return (
    <div>
      <input
        type='text'
        value={customerName}
        onChange={(event) => setCustomerName(event.target.value)}
      />
      <button type='button' onClick={handleAddNewCustomer}>
        Add new customer
      </button>
      <ul>
        {customers.length > 0 ? (
          customers.map((customer) => (
            <li key={customer.id}>
              {customer.name}
              <button
                type='button'
                onClick={() => handleDeleteCustomer(customer.id)}
              >
                Delete customer
              </button>
            </li>
          ))
        ) : (
          <div>Customers is empty</div>
        )}
      </ul>
      <button onClick={getUsersFromServer}>Get users from server</button>
    </div>
  );
};
