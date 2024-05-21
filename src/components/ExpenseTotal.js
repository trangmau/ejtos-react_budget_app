import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import useCurrency from '../hook/useCurrency';

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const currency = useCurrency();
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currency} {totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;
