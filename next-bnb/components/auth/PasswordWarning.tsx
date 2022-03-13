import React from "react";
import palette from "../../styles/palette";
import RedXIcon from "../../public/static/svg/auth/red_x_icon.svg";
import GreenCheckIcon from "../../public/static/svg/auth/green_check_icon.svg";
import styled from "styled-components";

const Container = styled.p<{ isValid: boolean }>`
    color: ${({ isValid }) => isValid ? palette.davidson_orange : palette.green};
    line-height : 1.5;
    display: flex;
    align-items: center;
    svg {
        margin-right: 8px;
    }
`;

interface IProps {
    isValid: boolean;
    text: string;
}

const PasswordWarning: React.FC<IProps> = ({ isValid, text }) => {
    return (
        <Container isValid={isValid}>
            {isValid ? <RedXIcon /> : <GreenCheckIcon />}
            {text}
        </Container>
    );
};

export default PasswordWarning;