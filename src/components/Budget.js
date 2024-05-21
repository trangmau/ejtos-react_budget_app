import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import useCurrency from '../hook/useCurrency';


const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const currency = useCurrency();
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const unpdatedBudget = parseInt(event.target.value);
        setNewBudget(unpdatedBudget);
        dispatch({
            type: "SET_BUDGET",
            payload: unpdatedBudget,
        });
    }
    return (
    <div className='alert alert-secondary'>
        <span>Budget: {currency} </span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
    </div>
    );
};
export default Budget;
