import React from "react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
      <div className="max-w-3xl mx-auto px-6 py-6">
        <h1 className="text-white text-3xl font-bold tracking-tight">
          Budget Tracker
        </h1>
        <p className="text-white/90 mt-1">Stay on top of your spending</p>
      </div>
    </header>
  );
}

export default Header;
