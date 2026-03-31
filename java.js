function login() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const error = document.getElementById("error");

  if (!username || !password) return;

  if (username.value === "agita" && password.value === "12345") {
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Username atau password salah!";
  }
}