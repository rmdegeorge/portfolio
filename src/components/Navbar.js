import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 100vw;
  background-color: grey;
  padding: 20px 20px 20px 20px;
`;

const LogoNameTitleContainer = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  color: #000000;
  margin-right: auto;
`;
const NameTitleContainer = styled.div`
`;

const Logo = styled.div`
  height: 50px;
  width: 50px;
  background-color: black;
  margin: 0 10px 0 0;
`;
const Name = styled.div`
  font-size: 30px;
`;
const JobTitle = styled.div``;

const LinkContainer = styled.div`
  
`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  padding: 10px;

  :hover {
    border-bottom: 2px solid #000000;
    transition: 'all 1.0s ease-in-out'

  }
`;


function Navbar(props) {
  return (
    <NavContainer>
      <LogoNameTitleContainer to="/">
        <Logo></Logo>
        <NameTitleContainer>
          <Name>Rob DeGeorge</Name>
          <JobTitle>Full Stack Developer</JobTitle>
        </NameTitleContainer>
      </LogoNameTitleContainer>
      <LinkContainer>
        <NavLink to='/Portfolio'>Portfolio</NavLink>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Contact'></NavLink>
      </LinkContainer>
    </NavContainer>
  );
}

export default Navbar;