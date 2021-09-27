import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import '../css/Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react/cjs/react.development';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No Expenses Found!</p>

  if (filteredExpenses.length > 0){ // if there are expenses availbale, return the filtered expenses, otherwise return 
    expensesContent = filteredExpenses.map((expense) => ( // the exact variable 'expensesCount'
      <ExpenseItem 
            key = {expense.id}
            title = {expense.title}
            amount = {expense.amount}
            date = {expense.date}  
          />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;