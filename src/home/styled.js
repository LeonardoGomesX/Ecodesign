import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -57px;

    h1 {
        color: white;
        font-size: 45px;
        margin: 5px;
    }

    h2 {
        color: #07b369;
        font-size: 33px;
        margin-top: 8px;
    }
`

export const Infos = styled.div`
    p {
        color: white;
        margin-top: -70px;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    margin-top: -90px;

    h2 {
        color: white;
        font-size: 33px;
        margin-top: 8px;
        margin-right: 45px;
    }

    button{
        background-color: transparent;
        width: 100px;
        height: 50px;
        border-radius: 10px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid white;
        cursor: pointer;
        transition: all 500ms;

        :hover {
            color:white;
            background-color: #07B369;
            border: none;
        }
    }
`