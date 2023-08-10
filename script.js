"use strict";
// / ---------------------------------Library array--------------------------------------------
let myLibrary = [];
// / -----------------------------------Adding book interface------------------------------------
const addNewBook = document.getElementById("add");
const newBookCard = document.querySelector(".add-new-book");

addNewBook.addEventListener("click", function () {
  newBookCard.classList.add("display");
});

// / -------------------------------------------Book info-----------------------------------------
// ^ When I click "add", all the information  will form a object and stored into the array.
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const readIt = document.getElementById("read-it");
const addIn = document.getElementById("add-in");

const allBookCards = document.querySelector(".book-cards");

addIn.addEventListener("click", function () {
  // ? How can I make the above values into an object, and push this object into the myLibrary array?

  if (!title.value || !author.value || !pages.value) {
    alert("Please fill in something!");
  } else {
    // ^ Create new book's object
    const newBook = {};
    newBook.title = title.value;
    newBook.author = author.value;
    newBook.pages = pages.value;
    newBook.readIt = readIt.checked;
    // ^ Create book card element
    // T- Study the code!
    const newBookCardElement = document.createElement("div");
    newBookCardElement.classList.add("book-card");
    newBookCardElement.innerHTML = `
    
      <div class="book-title flex-r">
        <h3 class="title">Title:</h3>
        <h3 class="title-text">${title.value}</h3>
      </div>
      <div class="book-author flex-r">
        <h3 class="author">Author:</h3>
        <h3 class="author-text">${author.value}</h3>
      </div>
      <div class="book-pages flex-r">
        <h3 class="pages">Pages:</h3>
        <h3 class="pages-text">${pages.value}</h3>
      </div>
      <div class="book-read-it flex-r">
        <h3 class="read-it">Finished:</h3>
        <h3 class="read-it-value">${readIt.checked ? "Yes" : "No"}</h3>
      </div>
    
  `;
    allBookCards.appendChild(newBookCardElement);
    // ^ push it into the array
    myLibrary.push(newBook);
    // ^ Clear interface
    title.value = author.value = pages.value = "";
    readIt.checked = false;
    // ^ turn off adding new book interface
    newBookCard.classList.remove("display");
  }
});
