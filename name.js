window.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const myform = document.querySelector("#my-form");
  const changeName = document.querySelector("#changeName");
  const name = document.querySelector("#name");
  const closeBtn = document.querySelector(".close");
  const showModal = document.querySelector(".modal-show");

  myform.addEventListener("submit", (e) => {
    e.preventDefault();
    name.innerText = changeName.value;
    myform.classList.remove("show-form");
    changeName.value = "";
  });

  closeBtn.addEventListener("click", () => {
    myform.classList.remove("show-form");
  });

  showModal.addEventListener("click", () => {
    myform.classList.add("show-form");
  });
});
