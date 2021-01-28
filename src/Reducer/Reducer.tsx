import { ReducerType, TransactionType } from '../Types/Types'
const TransactionReducer = ((state:TransactionType[], action:ReducerType) => {
    switch(action.type){
       case "ADD_TRANSACTION": {
          return [action.payload, ...state]
       }
       case "DELETE_TRANSACTION":
            state = state.filter((item:TransactionType) => {
              return item.id !== action.id
           })
           return state
       default : 
           return state
    }
   })
   
   export default TransactionReducer;