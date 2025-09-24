import React, { useMemo } from "react";

function formatCurrency(num) {
  if (typeof num !== "number" || Number.isNaN(num)) return "$0.00";
  return num.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function formatDate(iso) {
  // Expecting "YYYY-MM-DD"
  const d = new Date(iso);
  // If parsing fails, just show raw string
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

const categoryStyles = {
  GROCERIES: "bg-emerald-100 text-emerald-800",
  DINING: "bg-pink-100 text-pink-800",
  TRANSPORTATION: "bg-sky-100 text-sky-800",
  ENTERTAINMENT: "bg-indigo-100 text-indigo-800",
  HOUSING: "bg-orange-100 text-orange-800",
  UTILITIES: "bg-yellow-100 text-yellow-800",
  HEALTH: "bg-red-100 text-red-800",
  EDUCATION: "bg-purple-100 text-purple-800",
  SHOPPING: "bg-fuchsia-100 text-fuchsia-800",
  TRAVEL: "bg-cyan-100 text-cyan-800",
  OTHER: "bg-slate-200 text-slate-800",
};

function ExpenseList({ expenses }) {
  const total = useMemo(
    () => expenses.reduce((sum, e) => sum + (Number(e.amount) || 0), 0),
    [expenses]
  );

  return (
    <section className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex items-end justify-between gap-4 mb-4">
        <h2 className="text-xl font-semibold">Expenses</h2>
        <div className="text-sm text-slate-600">
          Total: <span className="font-semibold text-slate-900">{formatCurrency(total)}</span>
        </div>
      </div>

      {expenses.length === 0 ? (
        <p className="text-slate-600">No expenses yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-slate-600 border-b">
                <th className="py-2 pr-4">Description</th>
                <th className="py-2 pr-4">Category</th>
                <th className="py-2 pr-4">Amount</th>
                <th className="py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id} className="border-b last:border-b-0">
                  <td className="py-2 pr-4">{expense.description}</td>
                  <td className="py-2 pr-4">
                    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${categoryStyles[expense.category] || categoryStyles.OTHER}`}>
                      {expense.category || "OTHER"}
                    </span>
                  </td>
                  <td className="py-2 pr-4 font-medium">{formatCurrency(Number(expense.amount))}</td>
                  <td className="py-2">{formatDate(expense.date)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default ExpenseList;
