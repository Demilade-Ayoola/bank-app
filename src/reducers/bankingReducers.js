const initialState = {
    balance:0,
interest:0,
loan: 0,
}

 export const bankingReducer = (state= initialState, action) => {
        switch (action.type){
           case 'DEPOSIT':
               return{...state, balance: state.balance + action.payload}
               case 'WITHDRAW':
                return{...state, balance: state.balance - action.payload}
                case 'LOAN':
                    return{...state, loan: state.loan + action.payload}
                    case 'COLLECT_INTEREST':
                    return{...state, interest: (state.loan * 0.1).toFixed(2)}
            default:
                return state
        }
    }