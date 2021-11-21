import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        color: white;
    }

    h2{
        color: white;
    }

    p{
        color: white;
    }

    button{
        background-color: #07B369;
        color: black;
        width: 200px;
        height: 50px;
        border-radius: 10px;
        border: none;
        :hover{
            color:white;
        }
    }
`