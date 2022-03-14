import React, { useState } from "react";
import styled from "styled-components";
import palette from "../../styles/palette";
import Button from "../common/Button";
import Input from "../common/Input";
import MailIcon from "../../public/static/svg/auth/mail.svg";
import CloseEyeIcon from '../../public/static/svg/auth/closed_eye.svg';
import CloseXIcon from "../../public/static/svg/logo/close.svg";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import OpenedEyeIcon from "../../public/static/svg/logo/eye.svg";
import { loginAPI } from "../../lib/api/auth";

const Container = styled.form`
    width: 568px;
    padding: 32px;
    background-color: white;
    z-index: 11;

    .mordal-close-x-icon{
        cursor: pointer;
        display: block;
        margin: 0 0 40px auto;
    }

    .login-input-wrapper{
        position: relative;
        margin-bottom: 16px;
    }

    .login-modal-submit-button-wrapper{
        margin-bottom: 16px;
        padding-bottom: 16px;
        border-bottom: 1px solid ${palette.gray_eb};
    }
    .login-modal-set-signup {
        color: ${palette.dark_cyan};
        margin-left: 8px;
        cursor: pointer;
    }
`;

interface IProps {
    closeModal: () => void;
}

const LoginModal: React.FC<IProps> = ({ closeModal }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isPasswordHided, setIsPasswordHided] = useState(true);

    const dispatch = useDispatch();

    //* 비밀번호 숨김 토글하기
    const togglePasswordHiding = () => {
        setIsPasswordHided(!isPasswordHided);
    };

    // * 이메일 주소 변경시
    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    // * 비밀번호 변경 시
    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    // * 회원가입 모달로 변경
    const changeToSignUpModal = () => {
        dispatch(authActions.setAuthMode("signup"));
    }

    //* 로그인 클릭시
    const onSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!email || !password) {
            alert("이메일과 비밀번호를 입력해주세요.");
        } else {
            const loginBody = { email, password };
            try {
                const { data } = await loginAPI(loginBody);
                console.log(data);
            } catch (e) {
                console.log(e);
            }
        }
    }

    return (
        <Container onSubmit={onSubmitLogin}>
            <CloseXIcon className="mordal-close-x-icon" onClick={closeModal} />
            <div className="login-input-wrapper">
                <Input placeholder="이메일 주소" name="email" type="email" icon={<MailIcon />} value={email} onChange={onChangeEmail} />
            </div>
            <div className="login-input-wrapper login-password-input-wrapper">
                <Input placeholder="비밀번호 설정하기" name="password" type={isPasswordHided ? "password" : "text"}
                    icon={
                        isPasswordHided ? (<CloseEyeIcon onClick={togglePasswordHiding} />) : (
                            <OpenedEyeIcon onClick={togglePasswordHiding} />
                        )
                    } value={password} onChange={onChangePassword} />
            </div>
            <div className="login-modal-submit-button-wrapper">
                <Button type="submit">로그인</Button>
            </div>
            <p>
                이미 에어비앤비 계정이 있나요?
                <span className="login-modal-set-signup" role="presentation" onClick={changeToSignUpModal}>회원가입</span>
            </p>
        </Container>
    );
};

export default LoginModal;
