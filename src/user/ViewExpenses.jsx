import React, { useEffect, useState } from "react";

export default function ViewExpenses() {
  const [expenses, setExpenses] = useState([]);
  const [userName, setUserName] = useState("N/A");

  useEffect(() => {
    const username = sessionStorage.getItem("userName");
    if (username) {
      setUserName(username);

      const allExpenses =
        JSON.parse(localStorage.getItem("userExpenses")) || [];

      const userExpenses = allExpenses.filter(
        (expense) => expense.userName === username
      );

      setExpenses(userExpenses);
    }
  }, []);

  return (
    <div>
      <h2>View Expenses</h2>
      <p>User: <strong>{userName}</strong></p>

      {expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.expenseId}>
                <td>{expense.expenseId}</td>
                <td>{expense.expenseTitle}</td>
                <td>{expense.expenseAmount}</td>
                <td>{expense.expenseCategory}</td>
                <td>{expense.expenseDate}</td>
                <td>{expense.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}