import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('welcome')}!</h2>
    </div>
  );
};

export default Home;
