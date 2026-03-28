// src/services/reportApi.js

export const getReport = async (startDate, endDate) => {
  try {
   
    if (startDate && endDate) {
      console.log(`Generating mock report for ${startDate} to ${endDate}`);
      
      
      const randomExpense = Math.floor(Math.random() * 4000) + 1000;
      const randomIncome = Math.floor(Math.random() * 5000) + 2000;

      return {
        totalExpense: randomExpense,
        totalIncome: randomIncome,
        balance: randomIncome - randomExpense,
        categoryData: [
          { category: "Food", amount: Math.floor(randomExpense * 0.4) },
          { category: "Transport", amount: Math.floor(randomExpense * 0.3) },
          
          { category: "Entertainment", amount: Math.floor(randomExpense * 0.3) },
        ],
      };
    }
   
    return null; 
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};
export const downloadReportPDF = async (startDate, endDate) => {
  try {
    
    alert(`Downloading PDF for range: ${startDate} to ${endDate}`);
    
    
  } catch (error) {
    console.error("Download Error:", error);
  }
};