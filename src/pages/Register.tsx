import {
    Button, FormControl, FormLabel,
    Heading, HStack, Image,
    Input, PinInput, PinInputField,
    Stack,
    Step,
    StepIcon,
    StepIndicator,
    Stepper,
    StepSeparator,
    StepStatus,
    Text
} from "@chakra-ui/react";
import React from "react";
import {useRegister} from "../hooks/useRegister";
import {colors} from "../types/common";

export function Register() {
    const register = useRegister()
    const activeStepText = register.steps[register.activeStep].description

    const firstStep = () => {
        return (
            <>
                <FormControl isRequired width={"80%"}>
                    <FormLabel>이메일</FormLabel>
                    {/*이메일 입력*/}
                    <Input
                        placeholder='mindcraft@example.com'
                        mb={3}
                        type='email'
                        value={register.email}
                        onChange={register.handleEmailChange}
                    />
                    <Button
                        width={"100%"}
                        color={"white"}
                        bg={colors.key}
                        onClick={register.requestCodeSend}
                        isLoading={register.loadingEmailCode}
                    >
                        인증 메일 발송</Button>
                </FormControl>
            </>
        )
    }
    const secondStep = () => {
        return (
            <Stack>
                {/*이메일 코드 입력*/}
                <FormControl display={"flex"} flexDirection={'column'} justifyContent={"center"} isRequired>
                    <FormLabel>인증 번호</FormLabel>
                    <HStack>
                        <PinInput
                            onComplete={register.requestCodeSubmit}
                            isDisabled={register.loadingEmailCodeSubmit}
                        >
                            <PinInputField/>
                            <PinInputField/>
                            <PinInputField/>
                            <PinInputField/>
                        </PinInput>
                    </HStack>
                </FormControl>
            </Stack>
        )
    }
    const thirdStep = () => {
        return (
            <>
                <HStack width={"full"} justifyContent={"space-between"}>

                    <Stack width={"55%"} display={"flex"} alignItems={"center"}>
                        <FormControl isRequired>
                            <FormLabel>비밀번호</FormLabel>
                            {/*비밀번호 입력*/}
                            <Input
                                placeholder='비밀번호'
                                mb={3}
                                type='password'
                                value={register.password}
                                onChange={register.handlePasswordChange}
                            />
                            <Input
                                placeholder='비밀번호 확인'
                                mb={3}
                                type='password'
                                value={register.passwordCheck}
                                onChange={register.handlePasswordCheckChange}
                            />
                            <FormLabel>닉네임</FormLabel>
                            <Input
                                placeholder='닉네임'
                                mb={3}
                                type='text'
                                value={register.nickname}
                                onChange={register.handleNicknameChange}
                            />
                        </FormControl>
                    </Stack>

                    <Stack width={"40%"} display={"flex"} alignItems={"center"} height={"full"}>
                        <FormControl>
                            <FormLabel boxSize={"full"}>
                                프로필 이미지
                                <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150'/>
                            </FormLabel>
                            {/*비밀번호 입력*/}
                            <Input
                                hidden
                                type="file"
                                accept="image/*"
                                value={register.image}
                                onChange={register.handleImageChange}
                            />
                        </FormControl>
                    </Stack>

                </HStack>
                <Button
                    width={"100%"}
                    color={"white"}
                    bg={colors.key}
                    onClick={register.requestRegister}
                    isLoading={register.loadingRegister}
                >
                    회원 가입 요청</Button>
            </>
        )
    }

    return (
        <Stack
            maxW={"400px"}
            width={"80%"}
            height={"80%"}
            mx={"auto"}
            my={"8vh"}
            direction={"column"}
            alignItems={"center"}
        >
            <Stack
                width={"100%"}
            >
                <Text width={"100%"} textAlign={"center"}>{activeStepText}</Text>

                <Stepper size='sm' index={register.activeStep} gap='1'>
                    {register.steps.map((step, index) => (
                        <Step key={index}>
                            <StepIndicator>
                                <StepStatus complete={<StepIcon/>}/>
                            </StepIndicator>
                            <StepSeparator/>
                        </Step>
                    ))}
                </Stepper>

            </Stack>

            <Heading width={"full"} textAlign={"center"} my={30}>회원 가입</Heading>
            {
                register.activeStep === 0 ? firstStep() :
                    register.activeStep === 1 ? secondStep() :
                        register.activeStep === 2 ? thirdStep() : null
            }
        </Stack>
    )

}

