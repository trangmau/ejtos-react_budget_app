import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Alert } from 'bootstrap';
const Currency = () => {
  const {dispatch } = useContext(AppContext);
    const changeCurrency = (event)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: event.target.value,
            });
    }
    
  return (
        <div className="alert alert-secondary"> Currency: {
      <select name="Currency" id="Currency" onChange={changeCurrency}>
        <option value="£">£ Pound</option>
        <option value="$">$ Dollar</option>        
        <option value="₹">₹ Ruppee</option>
        <option value="€">€ Euro</option>
        <option value="CAD">CAD Canada</option>        
      </select>	
      }	
    </div>
    );
};
export default Currency;