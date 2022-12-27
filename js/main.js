let modal = document.querySelector(".backdrop");
let showModalbtn = document.querySelector("#account");
let cancelbtn = document.querySelector("#sign-in");
let InputName = document.querySelector("#FullName");
let InputEmail = document.querySelector("#Email");
let InputPassword = document.querySelector("#Password");
let Userform = document.querySelector("#modal-form");



function showModal() {
  modal.classList.toggle("active");
}

showModalbtn.addEventListener("click", showModal);
// cancelbtn.addEventListener("submit", showModal);

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
  showModal();
});

// Userform.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const form = new FormData();
//   form.append("username", InputName.value.trim());
//   form.append("email", InputEmail.value.trim());
//   form.append("password", InputPassword.value.trim());

//   function getTokenUp() {
//     fetch("https://task.samid.uz/v1/user/sign-up", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: form,
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((res) => {
//         console.log(res);
//       });
//   }
// });
// getTokenUp();

// Userform.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const form = {};
//   form.append("username", InputName.value.trim());
//   form.append("email", InputEmail.value.trim());
//   form.append("password", InputPassword.value.trim());

//   let options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       form,
//     }),
//   };

//   fetch("https://task.samid.uz/v1/user/sign-up", options)
//     .then((res) => res.json())
//     .then((data) => {
//       if (data?.token) {
//         window.localStorage.setItem("token", data.token);
//         window.location.replace("../second.html");
//       }
//     });
// });

// let baseURL = "https://task.samid.uz/v1/user/sign-up";

// const registration = (e) => {
//   e.preventDefault();

//   const userName = InputName.value.trim();
//   const userEmail = InputEmail.value.trim();
//   const userPassword = InputPassword.value.trim();

// //   {
// //     "username":"user123",
// //     "email":"user@user.uz",
// //     "password":"user123456"
// //   }

//   const params = {
//     username: userName,
//     email: userEmail,
//     password: userPassword,
//   };

//   if (
//     userName.length === 0 ||
//     userEmail.length === 0 ||
//     userPassword.length === 0
//   ) {
//     alert("Please enter your username and email address");
//   } else {
//     fetch(`${baseURL}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(params),
//     })
//       .then((e) => e.json())
//       .then((e) => {
//         if (e.code === 1) {
//           alert(e.message);
//           console.log(e);
//           setTimeout(() => {
//             window.location.replace("./second.html");
//           }, 2000);
//         } else {
//           console.log(e);
//           alert(e.errors.username);
//         }
//       });
//   }
// };

// $("#reg").addEventListener("submit", (e) => {
//   registration(e);
// });



// let sigIN = document.querySelector("sign-in");
// function getToken() {
//   const form = new FormData();
//   form.append("username", FullName.value.trim());
//   form.append("email", Email.value.trim());
//   form.append("password", Password.value.trim());

//   fetch("https://task.samid.uz/v1/user/sign-in", {
//     method: "POST",
//     body: form,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => {
//       console.log(res);
//       if (res.data?.token) {
//         localStorage.setItem("token", res.data.token);
//         location.replace("./second.html");
//       }
//     });
// }
// getToken();

// const handleLogin = () => {
//   const formData = new FormData();

//   formData.append("username", InputName.value);
//   formData.append("password", InputPassword.value);

//   fetch("https://task.samid.uz/v1/user/sign-in", {
//     method: "POST",
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//     body: formData,
//   })
//     .then((res) => res.json())
//     .then((d) => console.log(d));
// };

// handleLogin();