import React from "react";
import styled from "styled-components";

import headshot from "../img/headshot_icon.png";

const AboutContainer = styled.div``;

const AboutHeader = styled.h1``;
const AboutBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeadshotImage = styled.img`
  max-width: 100px;
  height: auto;
  border-radius: 50%;
  float: left;
  margin: 15px;
`;
function About(props) {
  return (
    <AboutContainer>
      <AboutHeader>
        <h1>About Rob</h1>
        <h2></h2>
      </AboutHeader>
      <AboutBody>
        <div>
          <HeadshotImage src={headshot} alt="Picture of Rob" />
          <p>
            I am a Full Stack Web Developer located in Salt Lake City, UT. I
            build high quality, mobile friendly, responsive websites.{" "}
          </p>
        </div>
        <p>I have experience working with:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Mongoose</li>
          <li>MongoDB</li>
          <li>Git</li>
          <li>JSON</li>
        </ul>
      </AboutBody>
    </AboutContainer>
  );
}

export default About;
