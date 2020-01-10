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
  padding: 150px 0 0 0;
`;
const ProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 50px;
  width: 100%;
`;

function App(props) {
  return (
    <AppWrapper>
      <GlobalStyle />
      <NameCard />
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
    </AppWrapper>
  );
}

export default App;
