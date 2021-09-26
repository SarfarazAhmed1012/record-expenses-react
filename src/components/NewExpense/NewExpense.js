import React from "react";
import ExpenseForm from "./ExpenseForm";
import '../css/NewExpense.css'
const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, // spread operator here, bcz we know from expenseForm there will be other objects like title, amount and date. 
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpense;