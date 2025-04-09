import React, { useEffect, useState } from "react";
import { getAllExpenses, addExpense } from "./services/expenseService";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({
    description: "",
    amount: "",
    date: "",
  });

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const data = await getAllExpenses();
    setExpenses(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value, });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const expense = {
        description: form.description,
        amount: parseFloat(form.amount),
        date: form.date,
      };
      await addExpense(expense);
	  // Resets the form
      setForm({ description: "", amount: "", date: "" });
	  // Refreshes the list
      fetchExpenses();
    } catch (error) {
      alert("Failed to add expense.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Budget Tracker</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <h2>Add New Expense</h2>
        <div>
          <label>What did you buy?: </label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Amount ($): </label>
          <input
            type="number"
            step="0.01"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date: </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>Add Expense</button>
      </form>

      <h2>Expenses</h2>
      <ul>
        {expenses.length === 0 ? (
          <p>No expenses yet.</p>
        ) : (
          expenses.map((expense) => (
            <li key={expense.id}>
              {expense.description} - ${expense.amount.toFixed(2)} on {expense.date}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
