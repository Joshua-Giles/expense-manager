package com.budget.service;

import java.util.List;

import com.budget.dto.ExpenseDto;

public interface ExpenseService {
    ExpenseDto saveExpense ( ExpenseDto expenseDto );

    List<ExpenseDto> getAllExpenses ();
}
