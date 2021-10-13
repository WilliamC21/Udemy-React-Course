import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (props) => {
  //comp to add a new expense to the list of expenses
  const [isEditing, setIsEditing] = useState(false); //initially user isnt adding, so false used to conditionally 'close' the form

  const saveExpenseDataHandler = (enteredExpenseData) => {
    //handler which uses new expense data as arg
    const expenseData = {
      //create new expense object
      ...enteredExpenseData, //takes form data
      id: Math.random().toString, //adds a random ID to assist react
    };
    props.onAddExpense(expenseData); //triggers the expense function in app to add the new expense to expenses list
    setIsEditing(false); //closes the form on submission
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  //functions used to either close or open the expense form box

  //JSX
  return (
    <div className="new-expense">
      {!isEditing && ( //is state of is editing false, render just the add button
        <button onClick={startEditingHandler}>Add New Expense</button> //buttons function is to open the expense form
      )}
      {isEditing && ( //if true
        <ExpenseForm // render the expense form
          onSaveExpenseData={saveExpenseDataHandler} //prop passed used to save the expense created within form comp
          onCancel={stopEditingHandler} //prop used to give cancel button functionality
        />
      )}
    </div>
  );
};

export default NewExpense;
