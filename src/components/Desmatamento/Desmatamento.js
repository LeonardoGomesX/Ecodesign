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
    BiroliroContainier,
    MataOrigContainer,
    MataAtualContainer,
    RioGrande,
    ReinoUnido,
    Japao,
    TextoContainer,
    InfosContainer,
    TituloDesmatamento3,
    TituloRioGrande,
    TituloReinoUnido,
    TituloJapao,
    TitulosDesmatamentos} from "./styled";
import linha from "../../assets/img/linha.png"

const Desmatamento = () => {
    return (
        <Main>

        <MataOrigContainer>
            <TituloDesmatamento>
                <h3>Mata Atlântica original (1,36 milhão de km²)</h3>
            </TituloDesmatamento>
            <InfosContainer>
                <MataAtualContainer>
                    <TituloDesmatamento3>
                        <h3>Mata Atlântica atualmente (102.012 km²)</h3>
                    </TituloDesmatamento3>
                </MataAtualContainer>
                <TextoContainer>
                    <p>Outra floresta, também tropical, que sofreu enermemente com o desmatamento é a Mata Atlântica. Ela é um dos biomas brasileiros mais ricos em biodiversidade, junto à Floresta Amazônica. Ambas são muito parecidas devido à localização geográfica em baixas e médias latitudes. A área da Mata Atlântica cobre 15% do território nacional, passando por 3.429 municípios (61% das cidades brasileiras) e 17 estados, todos nas regiões Centro-Oeste, Nordeste, Sudeste e Sul. Porém, hoje restam apenas 7% da floresta que havia originalmente quando os portugueses invadiram o Brasil.</p>
                </TextoContainer>
                <TextoContainer>
                    <p> A Mata Atlântica é fundamental para a qualidade de vida dos brasileiros. Serviços essenciais como abastecimento de água, regulação do clima, agricultura, pesca, energia elétrica e turismo, também dependem do bioma. Entretanto, por outro lado, este foi o bioma que mais sofreu com os ciclos econômicos brasileiros. Pouco a pouco a mata foi perdendo seu lugar, chegando a 93% de sua área original destruída. É preciso que estejamos atentos e atuemos, para que a Floresta Amazônica não tenha o mesmo destino</p>
                </TextoContainer>
            </InfosContainer>
        </MataOrigContainer>


        <RioGrande>
            <TituloRioGrande>
                <h3>Rio Grande do Sul (281.730,2 km²)</h3>
            </TituloRioGrande>
        </RioGrande>

        <ReinoUnido>
            <TituloReinoUnido>
                <h3>Reino Unido (242.495 km²)</h3>
            </TituloReinoUnido>
        </ReinoUnido>

        <Japao>
            <TituloJapao>
                <h3>Japão (377.975 km²)</h3>
            </TituloJapao>
        </Japao>

        
        <DesmatamentoContainer>
            <TitulosDesmatamentos>
                <h3>Desmatamento 1500 - 1987</h3>
                <h3>(346.873,44 km²)</h3>
            </TitulosDesmatamentos>
        </DesmatamentoContainer>

        <DesmatamentoContainer2>
            <TitulosDesmatamentos>
                <h3>Desmatamento 1988</h3>
                <h3>(21.000 km²)</h3>
            </TitulosDesmatamentos>
        </DesmatamentoContainer2>

        <DesmatamentoContainer3>
            <TitulosDesmatamentos>
                <h3>Desmatamento 1989 - 1994</h3>
                <h3>(86.100 km²)</h3>
            </TitulosDesmatamentos>
        </DesmatamentoContainer3>

        <DesmatamentoContainer4>
            <TitulosDesmatamentos>
                <h3>Desmatamento 1995</h3>
                <h3>(29.100 km²)</h3>
            </TitulosDesmatamentos>
        </DesmatamentoContainer4>

        <DesmatamentoContainer5>
            <TitulosDesmatamentos>
                <h3>Desmatamento 1996 - 2001</h3>
                <h3>(102.500 km²)</h3>
            </TitulosDesmatamentos>
        </DesmatamentoContainer5>

        <DesmatamentoContainer6>
            <TitulosDesmatamentos>
                <h3>Desmatamento 2002 - 2007</h3>
                <h3>(119.800 km²)</h3>
            </TitulosDesmatamentos>
        </DesmatamentoContainer6>

        <DesmatamentoContainer7>
            <TitulosDesmatamentos>
                <h3>Desmatamento 2008 - 2013</h3>
                <h3>(44.300 km²)</h3>
            </TitulosDesmatamentos>
        </DesmatamentoContainer7>

        <DesmatamentoContainer8>
            <TituloDesmatamento2>
                <h3>Desmatamento 2014</h3>
                <h3>(5.000 km²)</h3>
            </TituloDesmatamento2>
        </DesmatamentoContainer8>

        <DesmatamentoContainer9>
            <TitulosDesmatamentos>
                <h3>Desmatamento 2015 - 2018</h3>
                <h3>(28.500 km²)</h3>
            </TitulosDesmatamentos>
        </DesmatamentoContainer9>

        <BiroliroContainier>
            <h3>Pós-Bolsonaro</h3>
            <img src={linha} alt={"Linha tracejada"}/>
        </BiroliroContainier>

        <DesmatamentoContainer10>
            <TitulosDesmatamentos>
                <h3>Desmatamento 2019 - 2021</h3>
                <h3>(29.890 km²)</h3>
            </TitulosDesmatamentos>
        </DesmatamentoContainer10>

        </Main>
    )
}

export default Desmatamento;