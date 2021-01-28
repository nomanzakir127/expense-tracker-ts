export type TransactionType = {
    id:number,
    income:number,
    expense: number,
    text: string
}

export type ReducerType = {
    payload:TransactionType,
    id: number,
    type:string
}

