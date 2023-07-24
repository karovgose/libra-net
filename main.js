//Boook library

//create 5 hard coded books

//you need to have 3 inputs for
//name of the book
//author
//category

//on cliclk on button you need to show the 5 hard coded books and take the value from the inputs and display all them together maybe in a table

//you need to have a delete button for the books on click thee book shoould be removed
// Define the array of books

const books = [
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    bookRead: true,
  },
  {
    name: "1984",
    author: "George Orwell",
    category: "Fiction",
    bookRead: true,
  },
  {
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    bookRead: true,
  },
  {
    name: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    category: "Fiction",
    bookRead: true,
  },
  {
    name: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Fiction",
    bookRead: false,
  },
];

const table = document.getElementById("books__list");
const showBooks = document.getElementById("btn__show__books");
const addNewBook = document.getElementById("add__book");
const popup = document.getElementById("popup");
const nameInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const categoryInput = document.getElementById("category");
const bookReadInput = document.getElementById("book_read");
const submitBtn = document.getElementById("submit_btn");
const closeBtn = document.getElementById("close_btn");

let lastIndex = 0;
const getBooks = function () {
  if (!table.querySelector("thead")) {
    const tableHead = document.createElement("thead");
    const tableHeadRow = document.createElement("tr");
    const nameHead = document.createElement("th");
    nameHead.textContent = "Name of the book";
    const authorHead = document.createElement("th");
    authorHead.textContent = "Name of the author";
    const categoryHead = document.createElement("th");
    categoryHead.textContent = "Category";
    const bookReadHead = document.createElement("th");
    bookReadHead.textContent = "Readed";
    tableHeadRow.appendChild(nameHead);
    tableHeadRow.appendChild(authorHead);
    tableHeadRow.appendChild(categoryHead);
    tableHeadRow.appendChild(bookReadHead);
    tableHead.appendChild(tableHeadRow);
    table.appendChild(tableHead);
  }

  for (let i = lastIndex; i < books.length; i++) {
    let book = books[i];
    let row = document.createElement("tr");
    let name = document.createElement("td");
    let btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete book";
    btnDelete.className = "btn-yellow";
    name.textContent = book.name;
    row.appendChild(name);
    let author = document.createElement("td");
    author.textContent = book.author;
    row.appendChild(author);
    let category = document.createElement("td");
    category.textContent = book.category;
    row.appendChild(category);
    let bookRead = document.createElement("td");
    bookRead.textContent = book.bookRead ? "readed book✅" : "unread book ❌";
    row.appendChild(bookRead);
    row.appendChild(btnDelete);
    table.appendChild(row);
    btnDelete.addEventListener("click", function () {
      row.remove();
    });
  }
  lastIndex = books.length;
};

showBooks.addEventListener("click", getBooks);

addNewBook.addEventListener("click", function () {
  popup.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
});

closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});
document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    popup.style.display = "none";
  }
});

submitBtn.addEventListener("click", function () {
  const name = nameInput.value;
  const author = authorInput.value;
  const category = categoryInput.value;
  const bookRead = bookReadInput.checked;
  const newBook = {
    name,
    author,
    category,
    bookRead,
  };
  books.push(newBook);
  console.log(books);
  nameInput.value = "";
  authorInput.value = "";
  categoryInput.value = "";
  bookRead.textContent = bookRead ? "readed book✅" : "unread book ❌";
  popup.style.display = "none";
});
