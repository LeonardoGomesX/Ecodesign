import React from "react";
import {Main, Pix, Container, CampoFutPixel, PortoAlegre, Amazonia, TituloAmazonica, Portugal, TituloPortugal, DetailsContainer, ReguaContainer, EscaleCotainer} from "./styled";
import Description from "../components/Description/Description"
import Figure from "../components/Figure/Figure"
import Desmatamento from "../components/Desmatamento/Desmatamento"
import escala from "../assets/img/scale.png"
import indicador from "../assets/img/indicador.png"

const Tela = () => {

    return (
        <Main>
            <Container>
                <h3>12 campos de futebol (8.250 m²)</h3>
                <Pix>(1 pixel)</Pix>
                <CampoFutPixel> <div/> </CampoFutPixel>
                <img src={indicador} alt=" foto indicador" />
            </Container>
            
            <Container>
                <h3>Porto Alegre (496,8 km²)</h3>
                <Pix>(70px X 70px)</Pix>
                <PortoAlegre> </PortoAlegre>
            </Container>

            <Container>
                <Portugal>
                    <TituloPortugal>
                        <h3>Portugal (92.212 km²)</h3>
                        <h3>(1840px X 500px)</h3>
                    </TituloPortugal>
                </Portugal>
            </Container>
            
            <Container>
                <Amazonia> 
                    <TituloAmazonica>
                        <h3>Tamanho Amazônia Legal</h3>
                        <h3>( 5.033.072 km² )</h3>
                    </TituloAmazonica>
                    <DetailsContainer>
                        <Description/>
                        <Description />
                        <Description />
                        <Description />
                        <Description />
                        <Description />
                        <Description />
                        <Description />
                        <Description />
                        <Description />
                        <Description />
                        <Figure />

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