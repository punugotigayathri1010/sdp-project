// src/services/reportApi.js

export const getReport = async (startDate, endDate) => {
  try {
    // --- MOCK DATA LOGIC FOR TESTING ---
    // If you enter dates, we simulate a successful API response with random values
    if (startDate && endDate) {
      console.log(`Generating mock report for ${startDate} to ${endDate}`);
      
      // Generating random amounts between 1000 and 5000
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
    // -----------------------------------

    // Original API Logic (Uncomment this when your Backend is ready)
    /*
    let url = "http://localhost:5000/api/report";
    if (startDate && endDate) {
      url += `?startDate=${startDate}&endDate=${endDate}`;
    }
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch report");
    return await response.json();
    */

    return null; 
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};

// download PDF
export const downloadReportPDF = async (startDate, endDate) => {
  try {
    // If backend isn't ready, we just alert the user for now
    alert(`Downloading PDF for range: ${startDate} to ${endDate}`);
    
    /* const response = await fetch(`http://localhost:5000/api/report/pdf?startDate=${startDate}&endDate=${endDate}`);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `expense-report-${startDate}.pdf`;
    a.click();
    */
  } catch (error) {
    console.error("Download Error:", error);
  }
};