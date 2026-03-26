import React, { useState } from "react";
import { getReport } from "../Services/reportApi";

function Report() {
  const [report, setReport] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!startDate || !endDate) {
      alert("Please select both Start and End dates.");
      return;
    }

    setLoading(true);
    try {
      const data = await getReport(startDate, endDate);
      console.log("Fetched Data:", data); // Check your browser console to see the structure
      setReport(data);
    } catch (error) {
      console.error("Error fetching report:", error);
      alert("Failed to fetch report. Check your API connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Expense Report</h2>

      {/* Date Filters */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <input
          type="date"
          value={startDate} // Added value binding
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          value={endDate} // Added value binding
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {/* Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={handleGenerate} disabled={loading}>
          {loading ? "Generating..." : "Generate Report"}
        </button>
       
      </div>

      <hr />

      {/* Report Display Logic */}
      {loading && <p>Loading data, please wait...</p>}

      {!loading && report && (
        <div style={{ marginTop: "20px", border: "1px solid #ddd", padding: "15px" }}>
          <h3>Summary</h3>
          {/* Using fallback values (|| 0) in case the API keys are missing */}
          <p><strong>Total Expense:</strong> ₹{report.totalExpense || 0}</p>
          <p><strong>Total Income:</strong> ₹{report.totalIncome || 0}</p>
          <p><strong>Balance:</strong> ₹{report.balance || 0}</p>

          <h3>Category-wise Spending</h3>
          {report.categoryData && report.categoryData.length > 0 ? (
            report.categoryData.map((item, index) => (
              <p key={index} style={{ borderBottom: "1px dashed #ccc", padding: "5px 0" }}>
                {item.category}: <strong>₹{item.amount}</strong>
              </p>
            ))
          ) : (
            <p>No category data available for this range.</p>
          )}
        </div>
      )}

      {!loading && !report && <p>No report generated yet. Select dates and click the button.</p>}
    </div>
  );
}

export default Report;