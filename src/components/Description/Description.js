import React from "react";
import { TextContainer } from "./styled";

const Description = (props) => {
    return (
        <TextContainer>
            <p>
                {props.text}
            </p>
        </TextContainer>
    )
}

export default Description