import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {deposit, withdraw} from '../actions'
const Banking = () => {
const [amount, setamount] = useState('')
const dispatch = useDispatch()

const handleChange = (e) =>{
    e.preventDefault();
    setamount(e.target.value)

}

const handleDeposit = (e) =>{
    e.preventDefault();
    dispatch(deposit(+amount))
}
const handleWithdraw =(e) =>{
    e.preventDefault();
    dispatch(withdraw(+amount))

}
  return (
    <div>
  <form>
   <input type='number'
    value={amount}
     placeholder='Enter Amount'
   onChange={handleChange}
   ></input><br/>
        <button className='btn btn-primary' onClick={handleDeposit}>Deposit</button>    
        <button className='btn btn-danger' onClick={handleWithdraw}>Withdraw</button>    

</form>
    </div>
  )
}

export default Banking;