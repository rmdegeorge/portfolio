import React from "react";
import styled from "styled-components";

import GlobalStyle from "./themes/GlobalStyle";
import NameCard from "./components/NameCard";

const AppWrapper = styled.div``;

function App(props) {
  return (
    <AppWrapper>
      <GlobalStyle />
      <NameCard />
    </AppWrapper>
  );
}

export default App;
