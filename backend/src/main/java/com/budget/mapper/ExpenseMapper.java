package com.budget.mapper;

import com.budget.dto.ExpenseDto;
import com.budget.entity.Category;
import com.budget.entity.Expense;

public class ExpenseMapper {

    public static ExpenseDto mapToExpenseDto ( final Expense expense ) {
        final ExpenseDto dto = new ExpenseDto();
        dto.setId( expense.getId() );
        dto.setDescription( expense.getDescription() );
        dto.setAmount( expense.getAmount() );
        dto.setDate( expense.getDate() );
        dto.setCategory(expense.getCategory() == null ? "OTHER" : expense.getCategory().name());
        return dto;
    }

    public static Expense mapToExpense ( final ExpenseDto expenseDto ) {
        final Expense expense = new Expense();
        expense.setDescription( expenseDto.getDescription() );
        expense.setAmount( expenseDto.getAmount() );
        expense.setDate( expenseDto.getDate() );

        Category cat = Category.OTHER;
        if (expenseDto.getCategory() != null) {
            try {
                cat = Category.valueOf(expenseDto.getCategory().trim().toUpperCase());
            } catch (IllegalArgumentException ignored) { /* fallback OTHER */ }
        }
        expense.setCategory(cat);

        return expense;
    }
}
