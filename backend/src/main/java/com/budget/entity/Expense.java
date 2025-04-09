package com.budget.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Expense {

    @Id
    @GeneratedValue ( strategy = GenerationType.IDENTITY )
    private Long      id;

    private String    description;
    private double    amount;
    private LocalDate date;

    public Expense () {
    }

    public Expense ( final String description, final double amount, final LocalDate date ) {
        this.description = description;
        this.amount = amount;
        this.date = date;
    }

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
