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
        width: 1px;
        height: 1px;
        background-color: #07B369;
        margin: 0 auto;
        margin-top: 2px;
        margin-bottom: 5px;

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
        color: black;
        
    }
`

export const Amazonia = styled.div`
    width: 5781vw;
    max-width: 111000px;
    height: 500px;
    background-color: #07B369;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const DetailsContainer = styled.div`
    display: flex;
    /* justify-content: space-between; */
`

export const DetaisTextContainer = styled.div`
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
        color: black;
        margin-top: -15px;
    }
`

export const EscaleCotainer = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;
    left: 0;
    margin-top: 35px;

    p {
        margin: 0;
        font-weight: bold;
    }

    img {
        width: 165px;
    }
`

export const ReguaContainer = styled.div`
    width: 5781vw;
    max-width: 111000px;
    height: 35px;
    background-image: url(${regua});
`