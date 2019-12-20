import React from "react";
import styled from "styled-components";

import Project from "../components/Project";
import jmw_logo from "../img/JM_desert_logo_sage.png";
const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PortfolioTitle = styled.h1``;
const Paragraph = styled.p``;

function Portfolio(props) {
  return (
    <PortfolioWrapper>
      <PortfolioTitle>Projects</PortfolioTitle>
      <Paragraph>Projects go here</Paragraph>
      <Project
        title="Jasper Moon Wellness"
        link="https://jaspermoonwellness.herokuapp.com"
        img={jmw_logo}
      />
    </PortfolioWrapper>
  );
}

export default Portfolio;
