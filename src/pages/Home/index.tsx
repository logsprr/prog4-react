import React from 'react';
import { useTranslation } from 'react-i18next';

import Footer from '../../components/Footer';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('welcome')}!</h2>
      <Footer />
    </div>
  );
};

export default Home;
