import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  return (
    <div>
      <label>{t('language')}:</label>
      <select
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        value={i18n.language}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
