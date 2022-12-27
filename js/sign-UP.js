let sign_Up = document.querySelector(".sign-up");



sign_Up.addEventListener("click", (e) => {
  window.location.replace("../login.html");
  e.preventDefault();
  let name = fullname.value.trim();
  let login = email.value.trim();
  let pass = password.value.trim();
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: name,
      email: login,
      password: pass,
    }),
  };

  fetch("https://task.samid.uz/v1/user/sign-up", options)
    .then((res) => {
      if (!res.ok) throw alert(res);
      console.log(res);
    })
    .finally(() => {
      fullname.value = "";
      email.value = "";
      password.value = "";
    });
});
