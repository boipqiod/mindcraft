import React, {useState} from "react";
import {useSteps} from "@chakra-ui/react";
import {FromUtil} from "../utils/FromUtil";
import {usePage} from "./utils/usePage";
import {AuthService} from "../service/AuthService";
import {Requester} from "../utils/Requester";
import Logger from "../utils/Logger";

const steps = [
    {description: '이메일 인증'},
    {description: '인증 번호 입력'},
    {description: '기타 정보 입력'},
]

export const useRegister = () => {
    const {activeStep, setActiveStep} = useSteps({
        index: 0,
        count: steps.length,
    })

    const requester: Requester = Requester.instance
    const service = new AuthService(requester)

    const {toMain} = usePage()

    const [email, setEmail] = useState<string>("");
    const [emailCode, setEmailCode] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordCheck, setPasswordCheck] = useState<string>("");
    const [nickname, setNickname] = useState<string>("");
    const [image, setImage] = useState<string>("");

    const [loadingEmailCode, setLoadingEmailCode] = useState<boolean>(false);
    const [loadingEmailCodeSubmit, setLoadingEmailCodeSubmit] = useState<boolean>(false);
    const [loadingRegister, setLoadingRegister] = useState<boolean>(false);



    const toNextStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const requestCodeSend = () => {

        const validEmail = FromUtil.instance.checkEmail(email);
        if (!validEmail) {
            alert("이메일 형식이 올바르지 않습니다.");
            return;
        }
        //TODO: 이메일 인증 코드 전송

        setLoadingEmailCode(true);
        //인증 코드 입력창 보이기
        toNextStep();
        setLoadingRegister(false);
    }

    const requestCodeSubmit = (value: string) => {
        //TODO: 이메일 인증 코드 확인 요청
        setLoadingEmailCodeSubmit(true)
        Logger.info(value)
        //다음 단계로 이동
        toNextStep();
        setLoadingEmailCodeSubmit(false)
    }

    const requestRegister = async () => {

        const validPassword = FromUtil.instance.checkPassword(password);
        if (!validPassword) {
            alert("비밀번호 형식이 올바르지 않습니다.");
            return;
        }
        if (password !== passwordCheck) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        const validNickname = FromUtil.instance.checkNickname(nickname);
        const validNickname1 = FromUtil.instance.checkNickname("nickname");
        const validNickname2 = FromUtil.instance.checkNickname("1234");
        const validNickname3 = FromUtil.instance.checkNickname("닉네임");
        const validNickname4 = FromUtil.instance.checkNickname("닉네임112");

        Logger.info(validNickname, validNickname1, validNickname2, validNickname3, validNickname4)

        if (!validNickname) {
            alert("닉네임 형식이 올바르지 않습니다. (2~10자)");
            return;
        }
        setLoadingRegister(true)
        const res = await service.requestCode(email)
        setLoadingRegister(false)
        if (res.isSuccess) {
            Logger.info(email, emailCode, password, nickname, image)
            toMain()
        } else {
            alert(`회원가입 실패: ${res.message}`)
        }
    }


    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handleEmailCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailCode(e.target.value);
    }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
    const handlePasswordCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordCheck(e.target.value);
    }
    const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value);
    }
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImage(e.target.value);
    }


    return {
        email,
        emailCode,

        activeStep,
        setActiveStep,
        steps,

        nickname, image,
        password, passwordCheck,

        requestCodeSend,
        requestCodeSubmit,
        handleEmailChange,
        handleEmailCodeChange,
        handlePasswordChange,
        requestRegister,
        handlePasswordCheckChange,
        handleNicknameChange,
        handleImageChange,

        loadingEmailCode,
        loadingEmailCodeSubmit,
        loadingRegister,
    }
}
