import React from 'react';

import logoTop from './assets/logo-top.png';
import LogoFullCycle from './assets/logo-fullcycle.png';
import LogoLinkedIn from './assets/logo_linkedin.png';
import logoGithub from './assets/logo_github.png';


import './App.css';
import './styles';
import {
  AppContainer,
  Header,
  Content,
  Footer,
  FooterText01,
  FooterImagesContainer,
  ImageFooter,
} from './styles';
import Routes from './routes';

function App() {
  return (
    <AppContainer>
      <Header>
        <img src={logoTop} alt="logo" />
        <img src={LogoFullCycle} alt="logo" />

      </Header>
      <Content>
        <Routes />
      </Content>
      <Footer>
        <FooterText01>Desenvolvido por</FooterText01>
        <a href="mailto:orodrigo380@gmail.com">
          Rodrigo Abreu de Oliveira
        </a>
        <FooterImagesContainer>
          <a
            href="https://github.com/tigelah"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
          >
            <ImageFooter src={logoGithub} alt="Logo GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/rodrigo-abreu-de-oliveira/"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
          >
            <ImageFooter src={LogoLinkedIn} alt="Logo Linkedin" />
          </a>
        </FooterImagesContainer>
      </Footer>
    </AppContainer>
  );
}

export default App;
