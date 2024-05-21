import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import useCurrency from '../hook/useCurrency';

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);
    const currency = useCurrency();
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency} {budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
