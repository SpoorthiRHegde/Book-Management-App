import i18n from 'i18next';

export const validateBook = (book) => {
  const errors = {};
  if (!book.title) errors.title = i18n.t('errorRequired');
  if (!book.author) errors.author = i18n.t('errorRequired');
  return errors;
};
