import React from "react";
import globalStyles from "./assets/styles/global.css";

import styled from "styled-components";

import GlobalStyle from "./themes/GlobalStyle";
import NameCard from "./components/NameCard";
import ProjectCard from "./components/Project";
import jmwellnessimg from "./img/jm-wellness-screenshot.png";
import forumimg from "./img/forum-screenshot.png";
import spaceraceimg from "./img/space-race-screenshot.png";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 75px 0 0 0;
`;
const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 50px 0 50px;
  width: 100%;
`;
const ProjectsHeading = styled.h1`
  color: rgb(182, 185, 186);
`;
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(236, 236, 236, 0.75);
  width: 350px;
  height: auto;
  padding: 15px;
  border-radius: 10px;
  margin: 0 auto 50px auto;
  > a {
    margin: 10px;
    color: #000000;
    text-decoration: none;

    :hover {
      cursor: pointer;
      font-weight: bold;
    }
  }
`;
const ContactHeading = styled.h1`
  color: rgb(182, 185, 186);
`;

function App(props) {
  return (
    <AppWrapper>
      <GlobalStyle />
      <NameCard />
      <ProjectsHeading>Projects</ProjectsHeading>
      <ProjectsWrapper>
        <ProjectCard
          link="http://jaspermoonwellness.herokuapp.com/Classes"
          title="Jasper Moon Wellness"
          img={jmwellnessimg}
        />
        <ProjectCard
          link="https://robforum.herokuapp.com/"
          title="Forum Website"
          img={forumimg}
        />
        <ProjectCard
          link="http://space-race.surge.sh"
          title="Space X Info"
          img={spaceraceimg}
        />
      </ProjectsWrapper>
      <ContactHeading>Contact</ContactHeading>
      <ContactWrapper>
        <a href="">Email</a>
        <a href="https://www.linkedin.com/in/robdegeorge/">LinkedIn</a>
        <a href="https://github.com/rmdegeorge">GitHub</a>
      </ContactWrapper>
    </AppWrapper>
  );
}

export default App;
