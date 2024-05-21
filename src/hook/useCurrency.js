import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const useCurrency = () => {
    const { currency } = useContext(AppContext);
    return currency;
};

export default useCurrency;