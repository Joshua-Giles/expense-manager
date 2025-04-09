package com.budget.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.budget.dto.ExpenseDto;
import com.budget.entity.Expense;
import com.budget.mapper.ExpenseMapper;
import com.budget.respository.ExpenseRepository;
import com.budget.service.ExpenseService;

@Service
public class ExpenseServiceImpl implements ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    @Override
    public ExpenseDto saveExpense ( final ExpenseDto expenseDto ) {
        final Expense expense = ExpenseMapper.mapToExpense( expenseDto );
        final Expense saved = expenseRepository.save( expense );
        return ExpenseMapper.mapToExpenseDto( saved );
    }

    @Override
    public List<ExpenseDto> getAllExpenses () {
        return expenseRepository.findAll().stream().map( ExpenseMapper::mapToExpenseDto )
                .collect( Collectors.toList() );
    }
}
