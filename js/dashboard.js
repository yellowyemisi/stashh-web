document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector(".sidebar-close");

  hamburger.addEventListener("click", () => {
    sidebar.classList.add("sidebar-open");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("sidebar-open");
  });
});

const ctxBar = document.getElementById("monthlyExpensesChart");

new Chart(ctxBar, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Expenses ($)",
        data: [500, 700, 600, 800, 650, 900],
        backgroundColor: "#10b981",
        borderRadius: 12,
        barPercentage: 0.5,
        categoryPercentage: 0.8,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#111",
        titleColor: "#ddd",
        bodyColor: "#ddd",
        borderWidth: 2,
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#111",
          font: { weight: "normal" },
        },
        grid: { display: false },
      },

      x: {
        ticks: {
          color: "#111",
          font: { weight: "normal" },
        },
        grid: { display: false },
      },
    },
  },
});

const ctxDoughnut = document.getElementById("spendingAnalyticsChart");

new Chart(ctxDoughnut, {
  type: "doughnut",
  data: {
    labels: ["Food", "Bills", "Shopping"],
    datasets: [
      {
        label: "Spending ($)",
        data: [300, 150, 100],
        backgroundColor: ["#facc15", "#10b981", "#f97316"],
        borderColor: "#fff",
        borderWidth: 2,
        hoverOffset: 20,
      },
    ],
  },
  options: {
    responsive: true,
    cutout: "65%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#111",
          font: { weight: "bold" },
          boxWidth: 25,
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: "#000",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#111",
        borderWidth: 2,
      },
    },
  },
});

window.addEventListener("DOMContentLoaded", () => {
  const firstname = localStorage.getItem("userFirstName");
  const email = localStorage.getItem("userEmail");

  const welcomeEl = document.getElementById("welcome-text");
  const profileNameEl = document.getElementById("profile-name");

  let displayName = firstname || email || "User";

  if (welcomeEl) {
    welcomeEl.textContent = `Hello, ${displayName}! 👋`;
  }

  if (profileNameEl) {
    profileNameEl.textContent = displayName;
  }
});

const logoutBtn = document.querySelector(".logout-btn");

logoutBtn.addEventListener("click", () => {
  localStorage.clear();

  window.location.href = "/login.html";
});
