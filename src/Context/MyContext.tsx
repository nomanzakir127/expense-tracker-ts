import React, {useReducer} from 'react'
import TransactionReducer from '../Reducer/Reducer'
import {TransactionType} from '../Types/Types'

let initialTransactions:TransactionType[] = []

export const MyContext = React.createContext(initialTransactions)

export const ExpenseProvider = ({children}) =>{

    let [state, dispatch] = useReducer<TransactionType[]>(TransactionReducer, initialTransactions)

    const addTransaction = (transObj:TransactionType) =>{
        dispatch({
            type: "ADD_TRANSACTION",
            payload:transObj
        })
    }

    const deleteTransaction = (id:number) =>{
        dispatch({
            type: "DELETE_TRANSACTION",
            id:id
        })
    }

    return (
        <div>
            <MyContext.Provider value={{transactions:state, addTransaction, deleteTransaction}}>
                {children}
            </MyContext.Provider>
        </div>
    )
}