import React from 'react';
import { useTranslation } from 'react-i18next';

import { NewStatusContainer } from './styles';

import NewStatus from '../../components/NewStatus';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('welcome')}!</h2>
      <NewStatusContainer>
        <NewStatus />
        <NewStatus />
        <NewStatus />
      </NewStatusContainer>
      <Footer />
    </div>
  );
};

export default Home;
