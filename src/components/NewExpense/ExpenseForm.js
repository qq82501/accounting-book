import { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  /////////////////////////////////////////
  ///////////////STATE/////////////////////
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  /////////////////////////////////////////
  ///////////////Handler/////////////////////
  const titleChangeHandler = function (e) {
    setNewTitle(e.target.value);
  };

  const amoutChangeHandler = function (e) {
    setNewAmount(e.target.value);
  };

  const dateChangeHandler = function (e) {
    setNewDate(e.target.value);
  };

  const expenseSubmitHandler = function (e) {
    e.preventDefault();
    const expenseData = {
      title: newTitle,
      amount: +newAmount,
      date: new Date(newDate),
    };
    props.onGetNewExpense(expenseData);
    setNewTitle("");
    setNewAmount("");
    setNewDate("");
    props.onCancelAdding();
  };

  ///////////////////////////////////////////
  ///////////////Rendering Controll/////////////////////

  return (
    <form onSubmit={expenseSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleChangeHandler} value={newTitle} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amoutChangeHandler}
            value={newAmount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            value={newDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelAdding}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
