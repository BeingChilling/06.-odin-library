const myLibrary = [];

// / Book information
const Book = function (title, author, pages, readIt) {
  this.title = title;
  this.author = author;
  this.page = pages;
  this.readIt = readIt;
};

// / Add books into array
// ^ I will now try to add book into array.
// * Call the function, a thing will add an object to the array. By using the button
const addingBook = function () {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let readIt = document.getElementById("read-it").checked;

  const newBook = new Book(title, author, pages, readIt);
  myLibrary.push(newBook);

  const bookCards = document.querySelector(".book-cards");

  const bookCard = `
  <div class="book-title flex-r">
          <h3 class="card title">Title:</h3>
          <h3 class="title-text"> ${title}</h3>
        </div>
        <div class="book-author flex-r">
          <h3 class="card author">Author:</h3>
          <h3 class="author-text"> ${author}</h3>
          </div>
          <div class="book-pages flex-r">
          <h3 class="card pages">Pages:</h3>
          <h3 class="pages-text"> ${pages}</h3>
          </div>
          <div class="book-read-it flex-r">
          <h3 class="card read-it">If read:</h3>
          <h3 class="read-it-value"> ${readIt ? "Yes" : "No"}</h3>
          </div>
          `;

  // Create a new div element
  const newBookDiv = document.createElement("div");
  newBookDiv.className = "book-card"; // Assign a class to the new div
  newBookDiv.innerHTML = bookCard; // Set innerHTML to the bookCard string

  // Append the new div to the bookCards element
  bookCards.appendChild(newBookDiv);
  console.log(myLibrary);

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read-it").checked = false;
  toggleAddingBook();
};

const addButton = document.getElementById("add-in");
addButton.addEventListener("click", addingBook);

// / Open the add book card
const toggleAddingBook = function () {
  const newBookCard = document.querySelector(".add-new-book");
  newBookCard.classList.toggle("display");
};

const addBook = document.getElementById("add-new-book-button");
addBook.addEventListener("click", toggleAddingBook);
