const books = [
  {
    name: "html",
    number: 21,
    amount: "40.000",
    due: "1401/01/12",
  },
  {
    name: "css",
    number: 22,
    amount: "40.000",
    due: "1401/01/12",
  },
  {
    name: "java",
    number: 23,
    amount: "40.000",
    due: "1401/01/12",
  },
  {
    name: "react",
    number: 24,
    amount: "40.000",
    due: "1401/01/12",
  },

  {
    name: "node",
    number: 25,
    amount: "40.000",
    due: "1401/01/12",
  },
];

export const getBooks = () => {
  return books;
};

export const getBook = (number) => {
  return books.find(book => book.number === number)
}
