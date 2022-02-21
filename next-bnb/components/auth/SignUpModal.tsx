import React, { useState } from "react";
import styled from "styled-components";
import palette from "../../styles/palette";
import CloseXIcon from "../../public/static/svg/logo/close.svg";
import PersonIcon from "../../public/static/svg/logo/person.svg";
import MailIcon from "../../public/static/svg/logo/mail.svg";
import OpenedEyeIcon from "../../public/static/svg/logo/eye.svg";
import CloseEyeIcon from "../../public/static/svg/logo/close_eye.svg";
import Input from "../common/Input";
import {dayList, monthList, yearList} from "../../lib/staticData";
import Selector from "../common/Selector";
import Button from "../common/Button";

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

    .sign-up-password-input-wrapper {
        svg {
            cursor: pointer;
        }
    }

    .sign-up-birthdat-label {
        font-size: 16px;
        font-weight: 600;
        margin-top: 16px;
        margin-bottom: 8px;
    }

    .sign-up-modal-birthday-info {
        margin-bottom: 16px;
        color: ${palette.charcoal};
    }

    .sign-up-modal-birthday-selectors { 
        display: flex;
        margin-bottom: 24px;
        .sign-up-modal-birthday-month-selector {
            margin-right: 16px;
            flex-grow: 1;
        }
        .sign-up-modal-birthday-day-selector {
            margin-right: 16px;
            width: 25%;
        }
        .sign-up-modal-birthday-year-selector{
            width: 33.3333%;
        }
    }

    .sign-up-modal-submit-button-wrapper{
        margin-bottom: 16px;
        padding-bottom: 16px;
        border-bottom: 1px solid ${palette.gray_eb};
    }
`;

const SignUpModal: React.FC = () => {
    const [email, setEmail] = useState("");
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [password, setPassword] = useState("");
    const [hidePassword, setHidePassword] = useState(true);

    const [birthYear, setBirthYear] = useState<string | undefined>();
    const [birthDay, setBirthDay] = useState<string | undefined>();
    const [birthMonth, setBirthMonth] = useState<string | undefined>();

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

    //비밀번호 숨김
    const toggleHidePasword = () => {
        setHidePassword(!hidePassword);
    }

    //생년월일 월 변경
    const onChangeBirthMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setBirthMonth(event.target.value);
    }

    //생년월일 일 변경
    const onChangeBirthDay = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setBirthDay(event.target.value);
    };

    //생년월일 년 변경
    const onChangeBirthYear = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setBirthYear(event.target.value);
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
            <div className="input-wrapper sign-up-password-input-wrapper">
                <Input placeholder="비밀번호 설정하기" type={hidePassword ? "password" : "text"} icon={hidePassword ? (<CloseEyeIcon onClick={toggleHidePasword} />) : (<OpenedEyeIcon onClick={toggleHidePasword} />)} value={password} onChange={onChangePassword} />
            </div>
            <p className="sign-up-birthdat-label">생일</p>
            <p className="sign-up-modal-birthday-info">
                만 18세 이상의 성인만 회원으로 가입할수있습니다.
                생일은 다른 에어비앤비 이용자에게 공개되지 않습니다.
            </p>
            <div className="sign-up-modal-birthday-selectors">
                <div className="sign-up-modal-birthday-month-selector">
                    <Selector options={monthList} disabledOptions={["월"]} defaultValue="월" value={birthMonth} onChange={onChangeBirthMonth}/>
                </div>
                <div className="sign-up-modal-birthday-day-selector">
                    <Selector options={dayList} disabledOptions={["일"]} defaultValue="일" value={birthDay} onChange={onChangeBirthDay}/>
                </div>
                <div className="sign-up-modal-birthday-year-selector">
                    <Selector options={yearList} disabledOptions={["년"]} defaultValue="년" value={birthYear} onChange={onChangeBirthYear}/>
                </div>
            </div>
            <div className="sign-up-modal-submit-button-wrapper">
                <Button type="submit">가입하기</Button>
            </div>
        </Container>
    );
};

export default SignUpModal;