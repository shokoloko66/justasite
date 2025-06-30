
function login() {
  const id = document.getElementById('userID').value.trim();
  const pw = document.getElementById('password').value.trim();
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      const user = data.users.find(u => u.id === id && u.password === pw);
      if (!user) {
        document.getElementById('error').innerText = "Invalid ID or Password.";
      } else {
        sessionStorage.setItem("loggedUser", JSON.stringify(user));
        window.location.href = "dashboard.html";
      }
    });
}
