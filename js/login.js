let InputName = document.querySelector("#FullName");
let InputPassword = document.querySelector("#Password");
let Userform = document.querySelector("#modal-form");

Userform.addEventListener("submit", (e) => {
  e.preventDefault;
  function getToken() {
    const form = new FormData();
    form.append("username", InputName.value.trim());
    form.append("password", InputPassword.value.trim());

    fetch("https://task.samid.uz/v1/user/sign-in", {
      method: "POST",
      body: form,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res.data?.token) {
          localStorage.setItem("token", res.data.token);
          window.location.replace("./second.html");
        }
      });
  }
  getToken();
});
