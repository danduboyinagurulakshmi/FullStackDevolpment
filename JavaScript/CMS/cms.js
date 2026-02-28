// SIGNUP
document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const user = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  localStorage.setItem("user", JSON.stringify(user));
  document.getElementById("message").textContent = "Signup Successful!";
});

// LOGIN
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const message = document.getElementById("loginMessage");

  if (!storedUser) {
    message.style.color = "red";
    message.textContent = "No account found. Please signup.";
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    message.style.color = "green";
    message.textContent = "Login Successful!";
    setTimeout(() => {
      window.location.href = "cms.html";
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid email or password!";
  }
});