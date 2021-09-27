import React from "react";
import ExpenseForm from "./ExpenseForm";
import '../css/NewExpense.css'
import { useState } from "react/cjs/react.development";
const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, // spread operator here, bcz we know from expenseForm there will be other objects like title, amount and date. 
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    return(
        <div className="new-expense">
            { !isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm 
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={stopEditingHandler}
            />
            )}
            
        </div>
    );
};

export default NewExpense;