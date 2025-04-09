package com.budget.dto;

import java.time.LocalDate;

public class ExpenseDto {

    private Long      id;
    private String    description;
    private double    amount;
    private LocalDate date;

    public Long getId () {
        return id;
    }

    public void setId ( final Long id ) {
        this.id = id;
    }

    public String getDescription () {
        return description;
    }

    public void setDescription ( final String description ) {
        this.description = description;
    }

    public double getAmount () {
        return amount;
    }

    public void setAmount ( final double amount ) {
        this.amount = amount;
    }

    public LocalDate getDate () {
        return date;
    }

    public void setDate ( final LocalDate date ) {
        this.date = date;
    }

}
