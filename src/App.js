import React, { useState } from 'react';
import BookForm from './components/BookForm';
import LanguageSwitcher from './components/LanguageSwitcher';
import { validateBook } from './utils/validate';
import { useTranslation } from 'react-i18next';
import './styles/App.css';

const App = () => {
  const { t } = useTranslation();
  const [book, setBook] = useState({ title: '', author: '' });
  const [books, setBooks] = useState([]); // 🆕 to store multiple books
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateBook(book);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setBooks([...books, book]);
      setBook({ title: '', author: '' }); // Clear form
      setErrors({});
    }
  };

  const handleDelete = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <div className="App">
      <h1>{t('appTitle')}</h1>
      <LanguageSwitcher />

      <BookForm
        book={book}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
      />

      {books.length > 0 && (
        <div className="book-list">
          <h2>{t('addBook')}</h2>
          <ul>
            {books.map((b, index) => (
              <li key={index}>
                <strong>{t('title')}:</strong> {b.title} |{' '}
                <strong>{t('author')}:</strong> {b.author}
                <button className="delete-btn" onClick={() => handleDelete(index)}>
                  {t('deleteBook')}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
