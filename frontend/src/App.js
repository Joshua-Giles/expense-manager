import React, { useEffect, useState } from "react";
import { getAllExpenses, addExpense } from "./services/expenseService";
import Header from "./Header";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const data = await getAllExpenses();
    setExpenses(data);
  };

  const handleAddExpense = async (form) => {
    try {
      const expense = {
        description: form.description,
        amount: parseFloat(form.amount),
        date: form.date,
      };
      await addExpense(expense);
      fetchExpenses(); // refresh
    } catch (error) {
      alert("Failed to add expense.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <main className="max-w-3xl mx-auto p-6 space-y-6">
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseList expenses={expenses} />
      </main>
    </div>
  );
}

export default App;
