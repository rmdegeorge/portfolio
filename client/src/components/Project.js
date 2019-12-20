import React from "react";
import styled from "styled-components";

const ProjectWrapper = styled.div``;
const ProjectTitle = styled.h2``;
const ProjectImg = styled.img`
  max-height: 150px;
  width: auto;
  height: auto;
`;
const ProjectLink = styled.a``;

export default function Project(props) {
  return (
    <ProjectWrapper>
      <ProjectTitle>
        <ProjectLink href={props.link}>{props.title}</ProjectLink>
      </ProjectTitle>
      <ProjectImg src={props.img} />
    </ProjectWrapper>
  );
}
