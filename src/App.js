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
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />{" "}
    </div>
  );
};

export default App;
