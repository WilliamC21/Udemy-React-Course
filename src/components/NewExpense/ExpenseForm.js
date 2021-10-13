import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //props passed
  const [enteredTitle, setEnteredTitle] = useState(""); //states set up for each of the properties of an expense, require state to update without refresh
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //three functions to triggger the state updates for the properties
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //behaviour for when the submit button is pressed
  const submitHandler = (event) => {
    event.preventDefault(); //stops page reload

    const expenseData = {
      //takes the values of each form box and packages into new expense data
      title: enteredTitle,
      amount: +enteredAmount, //+plus sing enforces integer pver string
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); //pass the expense data to the new expense comp to run the 'saveExpenseDataHandler'
    setEnteredTitle(""); //reset all the fields to being empty
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      {" "}
      {/define the submission behaviour, pass what function to execute/}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />{" "}
          {
            /for each field the state of that prop is updated as it is being changed/
          }
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          {" "}
          {
            /using the props for cancel, pass up the event to trigger closing form/
          }
          Cancel
        </button>
        <button type="submit">Add Expense</button>{" "}
        {/type=submit, triggers the function as defined above/}
      </div>
    </form>
  );
};

export default ExpenseForm;
