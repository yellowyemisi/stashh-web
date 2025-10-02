document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstname = document.getElementById("firstname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorEl = document.getElementById("password-error");

  errorEl.textContent = "";

  if (password.length < 6) {
    errorEl.textContent = "Password must be at least 6 characters.";
    return;
  }

  localStorage.setItem("userFirstName", firstname);
  localStorage.setItem("userEmail", email);

  window.location.href = "/dashboard.html";
});
