import axios from "axios";

const BASE_URL = "http://localhost:8080/api/expenses";

export const getAllExpenses = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return [];
  }
};

export const addExpense = async (expense) => {
  try {
    const response = await axios.post(BASE_URL, expense);
    return response.data;
  } catch (error) {
    console.error("Error adding expense:", error);
    throw error;
  }
};

