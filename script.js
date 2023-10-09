const myLibrary = [];

// / Book information
const Book = function (title, author, pages, readIt) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readIt = readIt;
};

// / Toggle new book card
const toggleAddingBookCard = function () {
  const addingBookCard = document.querySelector(".add-new-book");
  addingBookCard.classList.toggle("display");
};
const addNewBookCard = document.getElementById("add-new-read-book");
addNewBookCard.addEventListener("click", toggleAddingBookCard);

// / Add books into array
const addingBookToArray = function (e) {
  e.preventDefault();
  // ^ Get book information
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const readIt = document.getElementById("read-it").checked;

  // ^ Add it to the array
  const oneReadBook = new Book(title, author, pages, readIt);
  myLibrary.push(oneReadBook);
  displayBook(title, author, pages, readIt);
  toggleAddingBookCard();
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read-it").checked = false;
  console.log(myLibrary);
};
const addToBookshelf = document.getElementById("add-to-bookshelf");
addToBookshelf.addEventListener("click", addingBookToArray);

// / Display books
const displayBook = function (title, author, pages, readIt) {
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
          <h3 class="read-it-value"><select type='option'><option ${
            readIt ? "selected" : ""
          }>Yes</option>
          <option ${!readIt ? "selected" : ""}>No</option></select></h3>
          </div>
          <button class="delete-button" >Delete</button>
          `;

  // Create a new div element
  const newBookDiv = document.createElement("div");
  newBookDiv.className = "book-card"; // Assign a class to the new div
  newBookDiv.innerHTML = bookCard; // Set innerHTML to the bookCard string

  const deleteButton = newBookDiv.querySelector(".delete-button");
  deleteButton.addEventListener("click", deleteBook);

  // Append the new div to the bookCards element
  bookCards.appendChild(newBookDiv);
};

// / Delete book
const deleteBook = function (e) {
  const bookCard = e.target.closest(".book-card");
  const index = Array.from(bookCard.parentNode.children).indexOf(bookCard);

  bookCard.remove();
  myLibrary.splice(index, 1);
  console.log(myLibrary);
};
