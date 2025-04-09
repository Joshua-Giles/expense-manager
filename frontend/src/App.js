import React, { useEffect, useState } from "react";
import { getAllExpenses } from "./services/expenseService";

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const data = await getAllExpenses();
      setExpenses(data);
    };
    fetchExpenses();
  }, []);

  return (
    <div>
      <h1>Budget Tracker</h1>
      <h2>Your Expenses</h2>
      <ul>
        {expenses.length === 0 ? (
          <p>No expenses yet.</p>
        ) : (
          expenses.map((expense) => (
            <li key={expense.id}>
              {expense.description} - ${expense.amount} on {expense.date}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
