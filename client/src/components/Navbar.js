import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 100vw;
  background-color: #fafafa;
  padding: 20px 20px 20px 20px;
  box-shadow: 0 3px 5px #a0a0a0;
`;

const LogoNameTitleContainer = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  color: #000000;
  margin-right: auto;
`;
const NameTitleContainer = styled.div``;

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

const LinkContainer = styled.div``;
const NavLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  margin: 10px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: inset -2px -2px 5px rgba(0, 0, 0, 0.25), inset 2px 2px 4px #ffffff,
    inset -2px 3px 5px rgba(0, 0, 0, 0.2);

  :hover {
    border-bottom: 2px solid #000000;
    transition: "all 1.0s ease-in-out";
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
        <NavLink to="/Portfolio">Portfolio</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </LinkContainer>
    </NavContainer>
  );
}

export default Navbar;
