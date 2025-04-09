package com.budget.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.budget.dto.ExpenseDto;
import com.budget.service.ExpenseService;

@CrossOrigin ( origins = "http://localhost:3000" )
@RestController
@RequestMapping ( "/api/expenses" )
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    @PostMapping
    public ExpenseDto addExpense ( @RequestBody final ExpenseDto expenseDto ) {
        return expenseService.saveExpense( expenseDto );
    }

    @GetMapping
    public List<ExpenseDto> getExpenses () {
        return expenseService.getAllExpenses();
    }

}
