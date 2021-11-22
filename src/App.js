import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import { Apps, Container, Container2, } from "./styled";
import Home from "./home/home";
import Tela from "./Escopo/Tela";

function App() {
  return (
    <div>
      <Apps>
        <HorizontalScroll reverseScroll={true} animValues={1}>
          
          <Container>
            <Home />
          </Container>
          
          <Container2>
            <Tela />
          </Container2>
          
          {/* <Container3>
            <Tela />
          </Container3> */}
          
        </HorizontalScroll>
      </Apps>
    </div>
  );
}

export default App;
