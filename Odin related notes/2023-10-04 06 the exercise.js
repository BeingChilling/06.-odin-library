function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.page = pages;
  this.read = read;
  this.bookInfo = function () {
    if (read !== "yes" && read !== "no") {
      return `Not valid answer!`;
    } else if (read === "yes") {
      return `${name} by ${author}, ${pages} pages, read it already.`;
    } else if (read === "no") {
      return `${name} by ${author}, ${pages} pages, not read yet.`;
    }
  };
}
// create instance in console.
