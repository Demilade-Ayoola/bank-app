import React from 'react'
import { useSelector } from 'react-redux'

function Balance(){
const state = useSelector(({auth, banking})=>{
    return{
        balance:banking.balance,
interest: banking.interest,
loan: banking.loan,
    }
}
)
    
    
 
    return (
    <div>
    <h1>Balance:<strong>${state.balance}</strong></h1>
    <h1>Loan:<strong>${state.loan}</strong></h1>
    <h1>Interest:<strong>${state.interest}</strong></h1>
    </div>
  )
    }

export default Balance;
