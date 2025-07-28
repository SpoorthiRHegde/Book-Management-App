import React from 'react';
import { useTranslation } from 'react-i18next';

const BookForm = ({ book, onChange, onSubmit, errors }) => {
  const { t } = useTranslation();

  return (
    <form onSubmit={onSubmit}>
      <label>{t('title')}</label>
      <input
        type="text"
        name="title"
        value={book.title}
        onChange={onChange}
      />
      {errors.title && <p>{errors.title}</p>}

      <label>{t('author')}</label>
      <input
        type="text"
        name="author"
        value={book.author}
        onChange={onChange}
      />
      {errors.author && <p>{errors.author}</p>}

      <button type="submit">{t('save')}</button>
      <button type="button">{t('cancel')}</button>
    </form>
  );
};

export default BookForm;
