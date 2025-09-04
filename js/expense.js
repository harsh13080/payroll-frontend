const API_URL = "https://payroll-backend-yw3u.onrender.com/api/expenses";
const token = localStorage.getItem("token");

document.getElementById("expenseForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ amount, category })
  });

  const data = await res.json();
  alert(data.message || "Expense submitted!");
  window.location.href = "dashboard.html";
});
