const API_URL = "https://payroll-backend-yw3u.onrender.com/api";
const token = localStorage.getItem("token");

// Generate/Update Salary Slip
document.getElementById("salaryForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("employeeEmail").value;
  const amount = document.getElementById("salaryAmount").value;
  const month = document.getElementById("salaryMonth").value;

  const res = await fetch(`${API_URL}/admin/salary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ email, amount, month })
  });

  const data = await res.json();
  alert(data.message || "Salary slip generated/updated!");
});

// Fetch All Expenses
async function loadExpenses() {
  const res = await fetch(`${API_URL}/admin/expenses`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();

  const table = document.getElementById("expenseTable");
  table.innerHTML = data.map(e => `
    <tr>
      <td>${e.employeeName}</td>
      <td>${e.category}</td>
      <td>${e.amount}</td>
      <td>${new Date(e.date).toLocaleDateString()}</td>
    </tr>
  `).join("");
}

loadExpenses();
