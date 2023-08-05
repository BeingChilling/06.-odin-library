"use strict";

const table = document.querySelector(".table");
const submit = document.getElementById("submit");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const readIt = document.getElementById("read-it");

let myLibrary = [];

function Book() {
  // the constructor
}

function addBookToLibrary() {
  // do stuff...
}

// Write a function that loops through the array and each book on the page
const everyBook = function () {
  myLibrary.forEach((book) => {
    console.log(book);
  });
};

// 1. When I put in the informations at the html and click submit, all the info will form an object with title, author, pages and ifRead.
// 1.1 These information will be added to the array. (And later be saved.)
// ~ When I hit submit, the information will be logged to console. The input will be cleared
// 2. The html will display the info I added.

submit.addEventListener("click", function (e) {
  const bookTitle = title.value;
  const bookPages = pages.value;
  const bookAuthor = author.value;
  const read = readIt.checked === true ? "Yes" : "No";
  e.preventDefault();
  addBook(bookTitle, bookPages, bookAuthor, read);
  title.value = "";
  author.value = "";
  pages.value = "";
  readIt.checked = false;
});

const addBook = function (title, author, pages, read) {
  const newRow = document.createElement("tr"); // Create a new <tr> element

  // Create <td> elements for each column
  const titleCell = document.createElement("th");
  titleCell.setAttribute("scope", "row");
  titleCell.textContent = title;

  const authorCell = document.createElement("td");
  authorCell.textContent = author;

  const pagesCell = document.createElement("td");
  pagesCell.textContent = pages;

  const readCell = document.createElement("td");
  readCell.textContent = read;

  // Append the <td> elements to the <tr> element
  newRow.appendChild(titleCell);
  newRow.appendChild(authorCell);
  newRow.appendChild(pagesCell);
  newRow.appendChild(readCell);

  // Append the <tr> element to the table
  table.appendChild(newRow);
};
