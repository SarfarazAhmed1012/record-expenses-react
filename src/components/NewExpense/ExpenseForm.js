import React, {useState} from "react";
import '../css/ExpenseForm.css';    
const ExpenseForm = () =>{

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({ // using only one UseState!
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',

    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({ // in case of single useState!
        //     ...userInput,   // using spread operator here, it will take all available objects, and add changes only in enteredTitle. Same for other inputs
        //     enteredTitle: event.target.value,
        // }) // if your state update depends on the prev state, use below method.
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value};
        // });
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput, 
        //     enteredAmount: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value};
        // });
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput, 
        //     enteredDate: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value};
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData)
    };
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"  onChange={amountChangeHandler} min="0.01" step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"  onChange={dateChangeHandler} min="2019-01-01" max="2021-01-01"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );

}

export default ExpenseForm;