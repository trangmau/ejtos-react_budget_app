import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import useCurrency from '../hook/useCurrency';

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const currency = useCurrency();
    const [newBudget, setNewBudget] = useState(budget);

    // Calculate the total expenses
    const calculateTotalExpenses = () => {
        return expenses.reduce((total, item) => total + item.cost, 0);
    };

    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value);
        const totalExpenses = calculateTotalExpenses();

        if (updatedBudget < totalExpenses) {
            alert(`You cannot reduce the budget value below the spending of ${totalExpenses}`);
            setNewBudget(budget); // Reset to the current budget
        } else {
            setNewBudget(updatedBudget);
            dispatch({
                type: 'SET_BUDGET',
                payload: updatedBudget,
            });
        }
    };

    useEffect(() => {
        setNewBudget(budget);
    }, [budget]);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
        );
    };

export default Budget;

