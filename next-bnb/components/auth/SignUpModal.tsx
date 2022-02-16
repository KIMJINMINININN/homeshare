import React, { useState } from "react";
import styled from "styled-components";
import palette from "../../styles/palette";
import CloseXIcon from "../../public/static/svg/logo/close.svg";
import PersonIcon from "../../public/static/svg/logo/person.svg";
import MailIcon from "../../public/static/svg/logo/mail.svg";
import OpenedEyeIcon from "../../public/static/svg/logo/eye.svg";
import CloseEyeIcon from "../../public/static/svg/logo/close_eye.svg";
import Input from "../common/Input";
const Container = styled.form`
    width : 568px;
    // height: 614px;
    padding: 32px;
    background-color: white;
    z-index: 11;
    
    .modal-close-x-icon {
        cursor: pointer;
        display: block;
        margin: 0 0 40px auto;
    }
    
    .input-wrapper {
        position: relative;
        margin-bottom: 16px;
    }
`;

const SignUpModal: React.FC = () => {
    const [email, setEmail] = useState("");
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const onChangeLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastname(event.target.value);
    };

    const onChangeFirstname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstname(event.target.value);
    };

    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <Container>
            <CloseXIcon className="modal-close-x-icon" />
            <div className="input-wrapper">
                <Input placeholder="이메일 주소" type="email" icon={<MailIcon />} name="email" value={email} onChange={onChangeEmail} />
            </div>
            <div className="input-wrapper">
                <Input placeholder="이름(예:길동)" icon={<PersonIcon />} value={lastname} onChange={onChangeLastname} />
            </div>
            <div className="input-wrapper">
                <Input placeholder="성(예: 홍)" icon={<PersonIcon />} value={firstname} onChange={onChangeFirstname} />
            </div>
            <div className="input-wrapper">
                <Input placeholder="비밀번호 설정하기" type="password" icon={<OpenedEyeIcon />} value={password} onChange={onChangePassword} />
            </div>
        </Container>
    );
};

export default SignUpModal;