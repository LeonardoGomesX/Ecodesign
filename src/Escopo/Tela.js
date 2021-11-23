import React from "react";
import {Main, Container, CampoFutPixel, PortoAlegre, Amazonia, TituloAmazonica, Portugal, TituloPortugal, DetailsContainer, ReguaContainer, EscaleCotainer, DetaisTextContainer} from "./styled";
import Description from "../components/Description/Description"
import Figure from "../components/Figure/Figure"
import Desmatamento from "../components/Desmatamento/Desmatamento"
import escala from "../assets/img/scale.png"
import indicador from "../assets/img/indicador.png"

const Tela = () => {

    return (
        <Main>
            <Container>
                <h3>12 campos de futebol (99 mil m²)</h3>
                <CampoFutPixel> <div/> </CampoFutPixel>
                <img src={indicador} alt=" foto indicador" />
            </Container>
            
            <Container>
                <h3>Porto Alegre (496,8 km²)</h3>
                <PortoAlegre> </PortoAlegre>
            </Container>

            <Container>
                <Portugal>
                    <TituloPortugal>
                        <h3>Portugal (92.212 km²)</h3>
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
                        <DetaisTextContainer>
                            <Description text={"A floresta Amazônica desempenha um papel imprescindível na manutenção de serviços ecológicos, como garantir a qualidade do solo, dos estoques de água doce e proteger a biodiversidade. Processos como a evaporação e a transpiração de florestas também ajudam a manter o equilíbrio climático fundamental para outras atividades econômicas, como a agricultura."}/>
                            <Description text={"Ela também tem um papel preponderante no uso múltiplo dos recursos hídricos (água potável, navegabilidade, aproveitamento energético, pesca, lazer, etc), concentrando 20% da água doce do planeta. A manutenção de florestas nas margens de rios evita erosões, assoreamentos e garante alimento para vários organismos aquáticos."}/>
                            <Figure />
                            <Description text={'Em 2020 na ONU, Bolsonaro atribuiu os incêndios florestais a "índios e caboclos", disse que eles aconteceram em áreas já desmatadas e baseou o discurso em elogios ao setor agropecuário.'}/>
                            <Description text={"No Brasil, existem cerca de 817.963 indígenas divididos em 256 sociedades e 274 línguas. Apenas 13.8% da terras do país estão delimitadas a eles, e a Amazônia Legal abriga a maior parte delas (são 424 áreas e 115.344.445 hectares); são povos que dependem da floresta para perpetuar seu modo de vida e sua cultura. Dos indígenas amazônicos, há sociedades que nunca foram contatadas, indicando a existência de uma riqueza cultural ainda desconhecida e protegida pela natureza. A longa e acumulada experiência dos povos indígenas em relação ao uso dos recursos da floresta é uma fonte de informação valiosa para a ciência e a tecnologia moderna. "}/>
                            <Description text={"No ritmo contrário ao da preservação pelos indígenas, o desmatamento da Amazônia acontece por muitas razões, como exploração madeireira ilegal, agricultura, desastres naturais, urbanização e mineração. Há diversas maneiras de remover florestas, e queimadas e o corte de árvores são dois métodos. Ainda que o desmatamento aconteça em todo mundo, atualmente, ele é uma questão especialmente crítica nas florestas tropicais da Amazônia, já que é a única grande floresta ainda em pé no mundo. Lá, as espécies de plantas e animais que elas abrigam vêm desaparecendo em ritmo alarmante."}/>
                            <Description text={"A Amazônia funciona como uma grande reserva de carbono, o qual se encontra estocado nos tecidos vegetais. Quando a floresta é derrubada e queimada, este carbono é liberado para a atmosfera, o que contribui para o aumento da temperatura da Terra devido ao efeito estufa (0,7ºC no último século). Os efeitos associados ao contínuo aumento das emissões de CO² (9 bilhões de toneladas por ano) e de outros gases para a atmosfera, são mudanças no clima, quebra de safras agrícolas e o aumento do nível do mar, o que poderia inundar as cidades litorâneas."}/>
                            <Description text={"O desmatamento na região representa hoje a liberação de 200 milhões de toneladas de carbono por ano (2,2% do fluxo total global)."}/>
                            <Description text={"Além disso, o desmatamento e a degradação florestal estão entre os principais fatores para o surgimento de doenças zoonóticas como HIV/AIDS, Ebola, SARS, Febre do Vale Rift e, a partir de 2020, a Covid-19. Isso ocorre porque o aumento da densidade de animais em áreas desmatadas e degradadas também eleva as doenças nessas populações de animais selvagens que, por sua vez, têm mais interações com pessoas devido à maior presença humana nas áreas de floresta degradada. Resultado: mudanças no uso da terra contribuíram para quase metade das doenças zoonóticas que afetaram humanos entre 1940 e 2005. (WWF)"}/>
                            <Description text={'Ele fala que o Brasil tem uma legislação ambiental para proteger o ambiente, ele elogia a vegetação da Amazônia. Tudo isso é verdade, mas nada foi feito por ele. A legislação não foi feita pela base dele no Congresso, não foi ele que plantou a Amazônia. O problema não é o que o Brasil tem, é o que ele quer destruir. Bolsonaro faz propaganda justamente daquilo que ele está destruindo", afirma Astrini.'}/>
                            <Description text={'Em fala na 76ª Assembleia Geral da ONU em Nova York, Bolsonaro afirmou que "somente no bioma amazônico, 84% da floresta está intacta”. Imagens registradas pelos satélites Landsat desde 1985 mostram que o Brasil perdeu 18% da Amazônia entre 1985 e 2017, segundo análise do projeto Mapbiomas - parceria entre universidades, ONGs e instituições nacionais. Além disso, pelo menos outros 20% da floresta estão degradados, com presença da garimpo, grileiros e madeireiros ilegais, aponta o Observatório do Clima.'}/>
                            <Description text={'A gente só tem a outra metade da floresta preservada porque o Bolsonaro só tem um mandato. Se ele estivesse há 20 anos no poder, a gente não tinha mais nada da Amazônia", afirma Marcio Astrini, secretário-executivo do Observatório do Clima.'}/>
                        </DetaisTextContainer>

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