import React from 'react';

import {
  Container,
  CompanyName,
  SocialNetworkImg,
  CardFlagsImg,
} from './styles';

import instagranIcon from '../../assets/icons/instagram.png';
import facebookIcon from '../../assets/icons/facebook-box.png';
import linkedinIcon from '../../assets/icons/linkedin-box.png';
import twitterIcon from '../../assets/icons/twitter-box.png';
import bandeirasDeCartao from '../../assets/images/bandeiras-de-cartao.png';

const Footer: React.FC = () => {
  return (
    <Container>
      <p>
        Copyright @ 2021 <CompanyName>uaiMazon</CompanyName>. Todos os Direitos
        Reservados
      </p>
      <div style={{ marginLeft: '3rem', gap: '10px' }}>
        <SocialNetworkImg src={instagranIcon} alt="instagran_icon" />
        <SocialNetworkImg src={facebookIcon} alt="facebook_icon" />
        <SocialNetworkImg src={linkedinIcon} alt="linkedin_icon" />
        <SocialNetworkImg src={twitterIcon} alt="twitter_icon" />
      </div>
      <div style={{ marginLeft: 'auto' }}>
        <CardFlagsImg src={bandeirasDeCartao} alt="bandeiras_de_cartao" />
      </div>
    </Container>
  );
};

export default Footer;
