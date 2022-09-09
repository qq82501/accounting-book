import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  if (!props.expenses.length)
    return (
      <h2 className="expenses-list__fallback">Cannot find expense item</h2>
    );

  if (props.expenses.length > 0) {
    return (
      <ul className="expenses-list">
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    );
  }
}

export default ExpenseList;
