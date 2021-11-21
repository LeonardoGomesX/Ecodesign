import React from "react";
import grafico from "../../assets/img/grafico.png"
import pizza from "../../assets/img/pizza.png"
import { FigureContainer } from "./styled";

const Figure = () => {
    return (
        <FigureContainer>
            <div>
                <img src={pizza} alt={"Grafico em pizza"}/>
            </div>
            <div>
                <img src={grafico} alt={"Grafico normal"}/>
            </div>
        </FigureContainer>
    )
}

export default Figure