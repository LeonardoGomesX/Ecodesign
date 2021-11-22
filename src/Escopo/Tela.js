import React from "react";
import {Main, Pix, Container, CampoFutPixel, PortoAlegre, Amazonia, TituloAmazonica, Portugal, TituloPortugal, DetailsContainer, ReguaContainer, EscaleCotainer} from "./styled";
import Description from "../components/Description/Description"
import Figure from "../components/Figure/Figure"
import Desmatamento from "../components/Desmatamento/Desmatamento"
import escala from "../assets/img/scale.png"

const Tela = () => {

    return (
        <Main>
            <Container>
                <h3>12 campos de futebol</h3>
                <Pix>(1 pixel)</Pix>
                <CampoFutPixel> <div/> </CampoFutPixel>
            </Container>
            
            <Container>
                <h3>Porto Alegre</h3>
                <Pix>(70px X 70px)</Pix>
                <PortoAlegre> </PortoAlegre>
            </Container>

            <Container>
                <Portugal>
                    <TituloPortugal>
                        <h3>Portugal</h3>
                        <h3>(1840px X 500px)</h3>
                    </TituloPortugal>
                </Portugal>
            </Container>
            
            <Container>
                <Amazonia> 
                    <TituloAmazonica>
                        <h3>Tamanho Amazônia Legal</h3>
                        <h3>(55500px X 500px : escala 1/2px)</h3>
                    </TituloAmazonica>
                    <DetailsContainer>
                        <Description/>
                        <Figure />
                        <Description />
                        <Figure />
                        <Description />
                        <Description />
                        <Description />

                        <Desmatamento />
                    </DetailsContainer>
                    <EscaleCotainer>
                        <p>5 mil km²</p>
                        <img src={escala} alt={"Escala da régua"}/>
                    </EscaleCotainer>
                    <ReguaContainer>
                        
                    </ReguaContainer>
                </Amazonia>
            </Container>

        </Main>
    );
}

export default Tela;