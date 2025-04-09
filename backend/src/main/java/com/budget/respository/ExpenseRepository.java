package com.budget.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.budget.entity.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {

}
