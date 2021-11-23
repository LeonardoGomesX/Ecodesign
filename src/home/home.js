import React from "react";
import {Img} from "../home/styled";
import capa from "../assets/img/capa.png"

const Home = () => {
    return (
        <div>
            <Img src={capa} alt="imagem capa" />
        </div>
    );
}

export default Home;
