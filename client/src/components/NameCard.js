import React from "react";
import styled from "styled-components";

import robheadshot from "../img/headshot_icon.png";

const NameCardWrapper = styled.div`
  width: 300px;
  height: 350px;
  box-shadow: 5px 5px 15px #000000;
  margin: 0 auto 0 auto;
  background-color: rgba(80, 70, 60, 0.75);
  border-radius: 10px;
`;
const Headshot = styled.img`
  position: relative;
  top: 0px;
  left: -20px;
  max-width: 120%;
  max-height: 120%;
`;
const HeadshotFrame = styled.div`
  position: relative;
  top: 30px;
  border-radius: 50%;
  overflow: hidden;
  width: 175px;
  height: 175px;
  margin: 0 auto 0 auto;
`;
const Name = styled.h1`
  position: relative;
  top: 60px;
  text-align: center;
  margin: 0 auto 0 auto;
`;
const JobTitle = styled.h3`
  position: relative;
  top: 70px;
  text-align: center;
  margin: 0 auto 0 auto;
`;

function NameCard(props) {
  return (
    <NameCardWrapper>
      <HeadshotFrame>
        <Headshot src={robheadshot} />
      </HeadshotFrame>
      <Name>Rob DeGeorge</Name>
      <JobTitle>Full Stack Web Developer</JobTitle>
    </NameCardWrapper>
  );
}

export default NameCard;
