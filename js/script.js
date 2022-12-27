let api = "https://books-13505-default-rtdb.firebaseio.com";
let books_content = document.querySelector("#books_orders");
let modal = document.querySelector(".backdrop");
let showModalbtn = document.querySelector("#cart");
let cancelbtn = document.querySelector(".cancel-img");
let custom_modal = document.querySelector(".custom-modal");
let buyBook = document.querySelector("#buy");

function showModal() {
  modal.classList.toggle("active");
}

showModalbtn.addEventListener("click", showModal);
cancelbtn.addEventListener("click", showModal);

//===   GETBOOKS START   ===//

function getAllBooks() {
  fetch(`${api}/books.json`, {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) throw res;
      return res.json();
    })
    .then((res) => {
      //   console.log(res);

      let arr2 = Object.keys(res).map((item) => {
        return {
          ...res[item],
          id: item,
        };
      });
      renderBooks(arr2);
    });
}

getAllBooks();
function renderBooks(arr) {
  let result = "";
  arr.forEach((element) => {
    result += `
    <div class="card" style="width: 18rem">
    <div class="bg-white p-3">
      <div class="p-2 bg-light">
        <img src="" class="p-3 card-img-top" alt="..." />
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title">${element.title} </h5>
      <p class="card-subtitle mb-2 text-muted">${element.author}</p>
      <p class="card-subtitle mb-2 text-muted">${element.publisheryear}</p>
      <div class="button-group d-flex gap-1 mb-1">
        <button type="button" class="w-50 btn btn-warning" id="buy" onclick="putCard('${element.id}')" value="${element.price}">
        ${element.price} so'm
        </button>
      </div>
    </div>
  </div>
  `;
  });
  // console.log(result);
  books_content.innerHTML = result;
}

function putCard(id) {
  fetch(`${api}/books/${id}.json`, {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) throw res;
      return res.json();
    })
    .then((res) => {
      let arr2 = Object.keys(res).map((item) => {
        return {
          ...res[item],
          id: item,
        };
      });
      putCardRender(arr2);
    });
}

function putCardRender(arr) {
  let result = "";
  arr.forEach((element) => {
    result += `
    <div class="card" style="width: 18rem">
    <div class="bg-white p-3">
      <div class="p-2 bg-light">
        <img src="" class="p-3 card-img-top" alt="..." />
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title">${element.id.title} </h5>
      <p class="card-subtitle mb-2 text-muted">${element.author}</p>
      <p class="card-subtitle mb-2 text-muted">${element.publisheryear}</p>
      <div class="button-group d-flex gap-1 mb-1">
      <span> ${element.price}</span>
      </div>
    </div>
  </div>
  `;
  });
  console.log(result);
  custom_modal.innerHTML = result;
}
//===   GETBOOKS END   ===//

//===   GETBOOKS END   ===//
// buyBook.addEventListener("click", (e) => {
//   function getAllBook() {
//     fetch(`${api}/books.json`, {
//       method: "GET",
//     })
//       .then((res) => {
//         if (!res.ok) throw res;
//         return res.json();
//       })
//       .then((res) => {
//         //   console.log(res);

//         let arr2 = Object.keys(res).map((item) => {
//           return {
//             ...res[item],
//             id: item,
//           };
//         });
//         renderBook(arr2);
//       });
//   }
//   function renderBook(arr) {
//     let result = "";
//     arr.forEach((element) => {
//       result += `
//       <div class="card" style="width: 18rem">
//       <div class="bg-white p-3">
//         <div class="p-2 bg-light">
//           <img src="" class="p-3 card-img-top" alt="..." />
//         </div>
//       </div>
//       <div class="card-body">
//         <h5 class="card-title">${element.title} </h5>
//         <p class="card-subtitle mb-2 text-muted">${element.author}</p>
//         <p class="card-subtitle mb-2 text-muted">${element.publisheryear}</p>
//         <div class="button-group d-flex gap-1 mb-1">
//           <button type="button" class="w-50 btn btn-warning" id="buy" onclick="Kitob()" value="${element.price}">
//           ${element.price} so'm
//           </button>
//         </div>
//       </div>
//     </div>
//     `;
//     });
//     books_content.innerHTML = result;
//   }
// });

// function getBookTitle() {
//   fetch(`${api}/books.json`, {
//     method: "GET",
//   })
//     .then((res) => {
//       if (!res.ok) throw res;
//       return res.json();
//     })
//     .then((res) => {
//       //   console.log(res);

//       let arr2 = Object.keys(res).map((item) => {
//         return {
//           ...res[item],
//           id: item,
//         };
//       });
//       renderBookTitle(arr2);
//       console.log(arr2);
//     });
// }
// getBookTitle();

// function renderBookTitle(arr) {
//   let result = "";
//   arr.forEach((element) => {
//     result += `
//     <button id="buy" value="${element.price}">
//         ${element.price} so'm
//     </button>
//   `;
//   });
//   let byBook = result;
// }
// function Kitob() {
//   buyBook.value;
//   custom_modal.innerHTML = byBook;
// }

// cart.addEventListener("click", (e) => {
//   e.preventDefault();
// });

// custom_modal

//  get book title

// buyBook.addEventListener("click", (e) => {
//   let bookValue = e.value;
//   custom_modal.innerHTML = bookValue;
// });
