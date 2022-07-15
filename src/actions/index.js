export const deposit = amount =>{
    return {
        type: 'DEPOSIT',
        payload: amount,
    }
}


export const withdraw = amount =>{
    return{
        type:'WITHDRAW',
        payload: amount,
    }
} 
export const loan = amount =>{
    return{
        type: 'LOAN',
        payload: amount,
    }
}
export const collectInterest = () =>{
    return{
        type:'COLLECT_INTEREST',
    }
}