import React from "react";
import {ButtonsContainer, Container, Infos, Title} from "../home/styled";
import flecha from "../assets/img/flecha.png"

const Home = () => {
    return (
        <div>
            <Container>
                <Title>
                    <h1>Trabalho de Ecodesign</h1>
                    <h2>A Amazônia</h2>
                </Title>
                <Infos>
                    <p>?</p>
                </Infos>
                <ButtonsContainer>
                    <h2>Comece a explorar</h2>
                    <button>
                        <img src={flecha} alt={"Imagem de flecha para direita"}/>
                    </button>
                </ButtonsContainer>
            </Container>
        </div>
    );
}

export default Home;
