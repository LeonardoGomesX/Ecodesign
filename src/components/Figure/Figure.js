import React from "react";
import Grafico from "../../assets/img/Grafico.png"
import { FigureContainer } from "./styled";

const Figure = () => {
    return (
        <FigureContainer>
            <div>
                <img src={Grafico} alt={"Gráfico normal"}/>
            </div>
        </FigureContainer>
    )
}

export default Figure