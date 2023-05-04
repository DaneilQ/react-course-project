import React, {useState} from 'react';

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter'

import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {

  const [ year, yearFiltered] = useState('')

  const expensesFilterHandler = (e) => {
    yearFiltered(e)
    console.log(e,'the payload')
    console.log(year,'the year variable')
  }
  return (
    <Card className="expenses">
      <ExpensesFilter filterHandler={expensesFilterHandler}/>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
