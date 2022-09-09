import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  //////////////////////////////////////////
  ///////////////STATE/////////////////////
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  //////////////////////////////////////////
  ///////////////HANDLER/////////////////////
  const getNewExpenseHandler = function (newRawData) {
    const newExpenseData = {
      id: Math.random(),
      ...newRawData,
    };
    props.onAddExpense(newExpenseData);
  };

  const openAddingHandler = function (e) {
    setIsAddingExpense(true);
  };

  const cancelAddingHandler = function (e) {
    setIsAddingExpense(false);
  };

  //////////////////////////////////////////////////////
  ///////////////Rendering Controll/////////////////////
  if (!isAddingExpense)
    return (
      <div className="new-expense">
        <button type="button" onClick={openAddingHandler}>
          Add New Expense
        </button>
      </div>
    );

  return (
    <div className="new-expense">
      <ExpenseForm
        onGetNewExpense={getNewExpenseHandler}
        onCancelAdding={cancelAddingHandler}
      />
    </div>
  );
}

export default NewExpense;
