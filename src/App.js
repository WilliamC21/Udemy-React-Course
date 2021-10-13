import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses"; //imports expenses and new expense
import NewExpense from "./components/NewExpense/NewExpense";
//App css serves as the index page for the project
const DUMMY_EXPENSES = [
  //dummy expenses used to populate lists at start, wouldnt be required in real imp
  {
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
//
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES); //state is iniitailly set to the dummy expenses

  const addExpenseHandler = (expense) => {
    //triggered by new expense prop
    //handler to allow adding an expense via the new expense component
    setExpenses((prevExpenses) => {
      //pass the previous expenses to mantain them on the list
      return [expense, ...prevExpenses]; //add the new expense to the list
    });
  };

  return (
    //JSX code
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/form at page top that allows adding expense/}
      <Expenses expenses={expenses} />{" "}
      {/comp that holds and displays all existing/}
    </div>
  );
};

export default App;
