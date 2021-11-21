import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import { Apps, Container, Container2, Container3 } from "./styled";
import Home from "./home/home";
import Tela1 from "./Infos1/Tela1";

function App() {
  return (
    <div>
      <Apps>
        <HorizontalScroll reverseScroll={true} animValues={1}>
          
          <Container>
            <Home />
          </Container>
          
          <Container2>
            <Tela1 />
          </Container2>
          
          <Container3>
            <h1>Ecodesign</h1>
          </Container3>
        </HorizontalScroll>
      </Apps>
    </div>
  );
}

export default App;
