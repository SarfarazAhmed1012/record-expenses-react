import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import '../css/Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react/cjs/react.development';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map((expense) => (
        <ExpenseItem 
          key = {expense.id}
          title = {expense.title}
          amount = {expense.amount}
          date = {expense.date}  
        />
      ))}
    </Card>
  );
}

export default Expenses;