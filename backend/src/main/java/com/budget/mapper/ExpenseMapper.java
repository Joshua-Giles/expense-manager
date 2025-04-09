package com.budget.mapper;

import com.budget.dto.ExpenseDto;
import com.budget.entity.Expense;

public class ExpenseMapper {

    public static ExpenseDto mapToExpenseDto ( final Expense expense ) {
        final ExpenseDto dto = new ExpenseDto();
        dto.setId( expense.getId() );
        dto.setDescription( expense.getDescription() );
        dto.setAmount( expense.getAmount() );
        dto.setDate( expense.getDate() );
        return dto;
    }

    public static Expense mapToExpense ( final ExpenseDto expenseDto ) {
        final Expense expense = new Expense();
        expense.setId( expenseDto.getId() );
        expense.setDescription( expenseDto.getDescription() );
        expense.setAmount( expenseDto.getAmount() );
        expense.setDate( expenseDto.getDate() );
        return expense;
    }

}
