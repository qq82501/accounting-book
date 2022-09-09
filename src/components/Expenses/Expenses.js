import { useState } from "react";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpensesFilter from "../Filter/ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";

function Expenses(props) {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState("2020");

  const getFilteredYear = function (selectedYear) {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === +filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        onGetFilteredYear={getFilteredYear}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
