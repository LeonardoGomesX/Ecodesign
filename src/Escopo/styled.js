import styled from "styled-components";
import regua from "../assets/img/ruler.svg"

export const Main = styled.div`
    display: flex;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin-right: 50px;
`

export const Pix = styled.h3`
    color: red;
    margin-top: 1px;
`

export const CampoFutPixel = styled.div`
    background-color: black;
        width: 20px;
        height: 20px;
        border-radius: 10px;

    div{
        width: 1px;
        height: 1px;
        background-color: #07B369;
        margin: 0 auto;
        margin-top: 9px;
    }
`

export const PortoAlegre = styled.div`
    width: 70px;
    height: 70px;
    background-color: #07B369;
`

export const Portugal = styled.div`
    width: 96vw;
    max-width: 1840px;
    height: 500px;
    background-color: #07B369;
    margin-right: 150px;
    margin-left: 70px;
`

export const TituloPortugal = styled.div`
    width: fit-content;
    margin-left: 40px;
    position: sticky;
    left: 0;
    padding-left: 20px;
    padding-right: 150px;

    h3:nth-child(2) {
        color: #f6dc24
    }
`

export const Amazonia = styled.div`
    width: 3585vw;
    max-width: 55500px;
    height: 500px;
    background-color: #07B369;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const DetailsContainer = styled.div`
    display: flex;
`

export const TituloAmazonica = styled.div`
    width: fit-content;
    margin-left: 40px;
    position: sticky;
    left: 0;
    padding-left: 20px;
    padding-right: 150px;

    h3:nth-child(2) {
        color: #f6dc24;
        margin-top: -10px;
    }
`
export const EscaleCotainer = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        margin: 0;
        font-weight: bold;
    }

    img {
        width: 165px;
    }
`

export const ReguaContainer = styled.div`
    width: 3585vw;
    max-width: 55500px;
    height: 60px;
    margin-top: 12px;
    background-image: url(${regua});
`