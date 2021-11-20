import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import { Apps, Container, Container2, Container3 } from "../src/styled";


function App() {
  return (
    <div>
      <Apps>
        <HorizontalScroll reverseScroll={true} animValues={1}>
          <Container>
            <h1>Ecodesign</h1>
          </Container>
          <Container2>
            <h1>Ecodesign</h1>
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
