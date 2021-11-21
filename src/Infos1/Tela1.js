import React from "react";
import {Main, Pix, Container, CampoFutPixel, PortoAlegre, Portugal} from "../Infos1/styled";


const Tela1 = () => {
    return (
        <Main>
            <Container>
                <h3>12 campos de futebol</h3>
                <Pix>(1 pixel)</Pix>
                <CampoFutPixel> </CampoFutPixel>
            </Container>
            
            <Container>
                <h3>Porto Alegre</h3>
                <Pix>(70px X 70px)</Pix>
                <PortoAlegre> </PortoAlegre>
            </Container>
            
            <Container>
                <h3>Portugal</h3>
                <Pix>(1840px X 500px)</Pix>
                <Portugal> </Portugal>
            </Container>

        </Main>
    );
}

export default Tela1;