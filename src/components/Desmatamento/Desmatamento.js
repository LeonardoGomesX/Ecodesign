import React from "react";
import {Main, TituloDesmatamento, TituloDesmatamento2, DesmatamentoContainer,
    DesmatamentoContainer2, 
    DesmatamentoContainer3,
    DesmatamentoContainer4,
    DesmatamentoContainer5,
    DesmatamentoContainer6,
    DesmatamentoContainer7,
    DesmatamentoContainer8,
    DesmatamentoContainer9,
    DesmatamentoContainer10,
    BiroliroContainier} from "./styled";
import linha from "../../assets/img/linha.png"

const Desmatamento = () => {
    return (
        <Main>
        
        <DesmatamentoContainer>
            <TituloDesmatamento>
                <h3>Desmatamento 1500 - 1988</h3>
                <h3>(11.562px x 300px : escala 1/2px)</h3>
            </TituloDesmatamento>
        </DesmatamentoContainer>

        <DesmatamentoContainer2>
            <TituloDesmatamento>
                <h3>Desmatamento 1988</h3>
                <h3>(700px X 300px : escala 1/2px)</h3>
            </TituloDesmatamento>
        </DesmatamentoContainer2>

        <DesmatamentoContainer3>
            <TituloDesmatamento>
                <h3>Desmatamento 1989 - 1994</h3>
                <h3>(2.870px X 300px : escala 1/2px)</h3>
            </TituloDesmatamento>
        </DesmatamentoContainer3>

        <DesmatamentoContainer4>
            <TituloDesmatamento>
                <h3>Desmatamento 1995</h3>
                <h3>(970px X 300px : escala 1/2px)</h3>
            </TituloDesmatamento>
        </DesmatamentoContainer4>

        <DesmatamentoContainer5>
            <TituloDesmatamento>
                <h3>Desmatamento 1996 - 2001</h3>
                <h3>(3.417px X 300px : escala 1/2px)</h3>
            </TituloDesmatamento>
        </DesmatamentoContainer5>

        <DesmatamentoContainer6>
            <TituloDesmatamento>
                <h3>Desmatamento 2002 - 2007</h3>
                <h3>(3.993px X 300px : escala 1/2px)</h3>
            </TituloDesmatamento>
        </DesmatamentoContainer6>

        <DesmatamentoContainer7>
            <TituloDesmatamento>
                <h3>Desmatamento 2008 - 2013</h3>
                <h3>(3.993px X 300px : escala 1/2px)</h3>
            </TituloDesmatamento>
        </DesmatamentoContainer7>

        <DesmatamentoContainer8>
            <TituloDesmatamento2>
                <h3>Desmatamento 2014</h3>
                <h3>(167px X 300px : escala 1/2px)</h3>
            </TituloDesmatamento2>
        </DesmatamentoContainer8>

        <DesmatamentoContainer9>
            <TituloDesmatamento>
                <h3>Desmatamento 2015 - 2018</h3>
                <h3>(950px X 300px : escala 1/2px)</h3>
            </TituloDesmatamento>
        </DesmatamentoContainer9>

        <BiroliroContainier>
            <h3>Pós-Bolsonaro</h3>
            <img src={linha} alt={"Linha tracejada"}/>
        </BiroliroContainier>

        <DesmatamentoContainer10>
            <TituloDesmatamento>
                <h3>Desmatamento 2019 - 2021</h3>
                <h3>(996px X 300px : escala 1/2px)</h3>
            </TituloDesmatamento>
        </DesmatamentoContainer10>

        </Main>
    )
}

export default Desmatamento;