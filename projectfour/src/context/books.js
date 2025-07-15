import { createContext, useState, useCallback } from 'react';
const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await fetch('http://localhost:3001/books');
    const data = await response.json();
    setBooks(data);
  }, []);

  const createBook = async (title) => {
    const response = await fetch('http://localhost:3001/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });

    const data = await response.json();
    setBooks([...books, data]);
  };

  const deleteBookById = async (id) => {
    await fetch(`http://localhost:3001/books/${id}`, {
      method: 'DELETE',
    });

    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await fetch(`http://localhost:3001/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: newTitle }),
    });

    const data = await response.json();

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...data };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    fetchBooks,
    createBook,
    deleteBookById,
    editBookById,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
