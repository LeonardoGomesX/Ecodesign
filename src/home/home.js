import React from "react";
import {Container} from "../home/styled";
// import Button from "@material-ui/core"

const Home = () => {
    return (
        <div>
            <Container>
                <h1>Trabalho de Ecodesign</h1>
                <h2>Amazônia</h2>
                <p>Informações</p>
                <button>Comece a explorar</button>
                {/* <Button color="secondary">Comece a explorar</Button> */}
            </Container>
        </div>
    );
}

export default Home;
