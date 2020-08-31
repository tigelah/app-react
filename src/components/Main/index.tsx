import React from 'react';
import logoReact from '../../assets/logo_react.png';
import { LinkStyled } from '../LinkStyled';

import { EuSouFullCycle } from './styles';

const Main: React.FC = () => {
  return (
    <>
      <img src={logoReact} alt="docker" />
      <EuSouFullCycle className="glitch">Eu sou Full Cycle</EuSouFullCycle>
      <LinkStyled to="/users">Listagem de Usuários</LinkStyled>
    </>
  );
};

export default Main;
