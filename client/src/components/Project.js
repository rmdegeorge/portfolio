import React from "react";
import styled from "styled-components";

const ProjectWrapper = styled.div`
  width: 350px;
  height: 300px;
  box-shadow: 5px 5px 15px #000000;
  background-color: rgb(80, 70, 60, 0.75);
  border-radius: 10px;
  overflow: hidden;
`;
const ProjectTitle = styled.h2`
  text-align: center;
`;
const ProjectImg = styled.img`
  max-width: 100%;
  width: auto;
  height: auto;
`;
const ProjectLink = styled.a`
  color: #000000;
  text-decoration: none;
`;

export default function ProjectCard(props) {
  return (
    <ProjectWrapper>
      <ProjectTitle>
        <ProjectLink href={props.link}>{props.title}</ProjectLink>
      </ProjectTitle>
      <ProjectImg src={props.img} />
    </ProjectWrapper>
  );
}
