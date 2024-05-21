import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import useCurrency from '../hook/useCurrency';
import "./style.css"

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const currency = useCurrency();

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button className="btn-increase" onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button className="btn-decrease" onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete className="btn-delete" size='1.7em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
