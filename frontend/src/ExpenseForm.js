import React, { useState } from "react";

const CATEGORIES = [
  "GROCERIES","DINING","TRANSPORTATION","ENTERTAINMENT",
  "HOUSING","UTILITIES","HEALTH","EDUCATION","SHOPPING","TRAVEL","OTHER"
];

function ExpenseForm({ onAddExpense }) {
  const [form, setForm] = useState({
    description: "",
    amount: "",
    date: "",
    category: "OTHER",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(form);
    setForm({ description: "", amount: "", date: "", category: "OTHER" });
  };

  return (
    <section className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Add New Expense</h2>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-1">
          <label className="text-sm font-medium text-slate-700">
            What did you buy?
          </label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Groceries, gas, coffee…"
          />
        </div>

        <div className="grid gap-1">
          <label className="text-sm font-medium text-slate-700">Amount ($)</label>
          <input
            type="number"
            step="0.01"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            required
            className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="0.00"
          />
        </div>

        <div className="grid gap-1">
          <label className="text-sm font-medium text-slate-700">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid gap-1 md:col-span-2">
          <label className="text-sm font-medium text-slate-700">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 active:bg-indigo-800 transition"
          >
            Add Expense
          </button>
        </div>
      </form>
    </section>
  );
}

export default ExpenseForm;
