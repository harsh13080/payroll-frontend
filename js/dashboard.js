const API_URL = "https://payroll-backend-yw3u.onrender.com/api"; 
const token = localStorage.getItem("token");

async function loadDashboard() {
  const res = await fetch(`${API_URL}/dashboard`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();

  // Salary Chart
  new Chart(document.getElementById("salaryChart"), {
    type: "line",
    data: {
      labels: data.salaryHistory.map(s => s.month),
      datasets: [{
        label: "Salary",
        data: data.salaryHistory.map(s => s.amount),
        borderColor: "green"
      }]
    }
  });

  // Expense Chart
  new Chart(document.getElementById("expenseChart"), {
    type: "bar",
    data: {
      labels: data.expenseHistory.map(e => e.category),
      datasets: [{
        label: "Expenses",
        data: data.expenseHistory.map(e => e.amount),
        backgroundColor: "red"
      }]
    }
  });
}

loadDashboard();
