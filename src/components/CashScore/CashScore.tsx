import { FC, Fragment, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  addedCashAction,
  divideCashAction,
  getCashAction,
  multipleCashAction,
} from '../../features/cash/cashSlice';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const CashScore: FC = () => {
  const dispatch = useDispatch();
  const { cash } = useTypedSelector((state) => state.cash);

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
      <h3>Cash Balance: {cash}</h3>
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
