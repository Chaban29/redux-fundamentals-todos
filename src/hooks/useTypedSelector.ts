import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../rootReducer/rootReducer';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
