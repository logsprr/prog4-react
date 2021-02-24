import React from 'react';

import { Container, Details, Title, SubTitle, Button } from './styles';

import womanSitting from '../../assets/images/woman-sitting.png';

const NewStatus: React.FC = () => {
  return (
    <Container>
      <img src={womanSitting} alt="woman-sitting" />
      <Details>
        <Title>Nova Coleção</Title>
        <SubTitle>Adidas SportsWear</SubTitle>
        <Button>Compre agora</Button>
      </Details>
    </Container>
  );
};

export default NewStatus;
