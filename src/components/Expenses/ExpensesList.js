import React from "react";
import ExpenseItem from "./ExpenseItem";
import '../css/ExpensesList.css'

const ExpensesList = props => {

    if (props.items.length === 0){ // if there are expenses availbale, return the filtered expenses, otherwise return 
        return <h2 className="expenses-list__fallback">Found no Expenses.</h2>
    }

    return(
        <ul className="expenses-list">
            {props.items.map((expense) => ( // the exact variable 'expensesCount'
                <ExpenseItem 
                        key = {expense.id}
                        title = {expense.title}
                        amount = {expense.amount}
                        date = {expense.date}  
                />
                ))
            }
        </ul>
    );
}

export default ExpensesList