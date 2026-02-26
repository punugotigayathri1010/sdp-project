import React, { useState, useEffect } from 'react';
import "./user.css";
export default function AddExpenses() {
  const [userName, setUserName] = useState('N/A');
  const [expenseFormData, setExpenseFormData] = useState({
    expenseTitle: '',
    expenseAmount: '',
    expenseCategory: '',
    expenseDate: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const username = sessionStorage.getItem('userName');
    if (username) setUserName(username);
  }, []);

  const handleExpenseChange = (e) => {
    const { name, value } = e.target;
    setExpenseFormData({
      ...expenseFormData,
      [name]: value
    });
    setErrorMessage('');
  };

  const handleAddExpense = (e) => {
    e.preventDefault();

    if (!expenseFormData.expenseTitle.trim()) {
      setErrorMessage('Expense title is required');
      return;
    }

    if (!expenseFormData.expenseAmount || expenseFormData.expenseAmount <= 0) {
      setErrorMessage('Amount must be a positive number');
      return;
    }

    if (!expenseFormData.expenseCategory.trim()) {
      setErrorMessage('Category is required');
      return;
    }

    if (!expenseFormData.expenseDate) {
      setErrorMessage('Date is required');
      return;
    }

    const expenseId = Math.floor(Math.random() * 900000) + 100000;

    const newExpense = {
      expenseId,
      expenseTitle: expenseFormData.expenseTitle,
      expenseAmount: expenseFormData.expenseAmount,
      expenseCategory: expenseFormData.expenseCategory,
      expenseDate: expenseFormData.expenseDate,
      userName,
      createdAt: new Date().toLocaleString()
    };

    const existingExpenses =
      JSON.parse(localStorage.getItem('userExpenses')) || [];

    existingExpenses.push(newExpense);

    localStorage.setItem(
      'userExpenses',
      JSON.stringify(existingExpenses)
    );

    setSuccessMessage(
      `Expense "${expenseFormData.expenseTitle}" added successfully with ID: ${expenseId}`
    );

    setExpenseFormData({
      expenseTitle: '',
      expenseAmount: '',
      expenseCategory: '',
      expenseDate: ''
    });

    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <p>User: <strong>{userName}</strong></p>

      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}

      <form onSubmit={handleAddExpense}>
        
        <div>
          <label>Expense Title </label><br />
          <input
            type="text"
            name="expenseTitle"
            value={expenseFormData.expenseTitle}
            onChange={handleExpenseChange}
            placeholder="Enter expense title"
          />
        </div>

        <div>
          <label>Amount </label><br />
          <input
            type="number"
            name="expenseAmount"
            value={expenseFormData.expenseAmount}
            onChange={handleExpenseChange}
            placeholder="Enter amount"
            min="1"
          />
        </div>

        <div>
          <label>Category </label><br />
          <input
            type="text"
            name="expenseCategory"
            value={expenseFormData.expenseCategory}
            onChange={handleExpenseChange}
            placeholder="Food, Travel, Shopping..."
          />
        </div>

        <div>
          <label>Date </label><br />
          <input
            type="date"
            name="expenseDate"
            value={expenseFormData.expenseDate}
            onChange={handleExpenseChange}
          />
        </div>

        <br />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}