import { FC, Fragment, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../rootReducer/rootReducer';
import {
  addedCashAction,
  divideCashAction,
  getCashAction,
  multipleCashAction,
} from '../../features/cash/cashSlice';

export const CashScore: FC = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state: RootState) => state.cash.cash);

  const handleAddedCash = useCallback(() => {
    dispatch(addedCashAction(200));
  }, [dispatch]);

  const handleGetCash = () => {
    if (cash <= 50) return;
    dispatch(getCashAction(cash));
  };

  const handleMultipleCash = () => {
    dispatch(multipleCashAction(3));
  };

  const handleDivideCash = () => {
    dispatch(divideCashAction(2));
  };

  useEffect(() => {
    console.log(cash);
  }, [cash]);

  return (
    <Fragment>
      <h3>{cash}</h3>
      <button type='button' onClick={handleAddedCash}>
        Add cash
      </button>
      <button type='button' onClick={handleGetCash}>
        Get cash
      </button>
      <div>
        <button type='button' onClick={handleMultipleCash}>
          Multiple cash
        </button>
        <button type='button' onClick={handleDivideCash}>
          Divide cash
        </button>
      </div>
    </Fragment>
  );
};
