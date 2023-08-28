import {
    Box,
    Button, FormControl, FormLabel,
    Heading, HStack, Image,
    Input, InputGroup, InputRightElement, PinInput, PinInputField,
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
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons";

export function Register() {
    const hook = useRegister()
    const activeStepText = hook.steps[hook.activeStep].description

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
                        value={hook.email}
                        onChange={hook.handleEmailChange}
                    />
                    <Button
                        width={"100%"}
                        color={"white"}
                        bg={colors.key}
                        onClick={hook.requestCodeSend}
                        isLoading={hook.loadingEmailCode}
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
                            onComplete={hook.requestCodeSubmit}
                            isDisabled={hook.loadingEmailCodeSubmit}
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
                <Stack
                    direction={{base: "column", md: "row"}}
                    width={"full"}
                    justifyContent={"space-between"}
                    mb={5}
                >
                    <Stack w={"full"}
                           display={"flex"} alignItems={"center"}>
                        <FormControl isRequired>
                            <FormLabel>비밀번호</FormLabel>
                            {/*비밀번호 입력*/}

                            <InputGroup>
                                <Input
                                    placeholder='비밀번호'
                                    mb={3}
                                    type={hook.hidePassword ? 'password' : 'text'}
                                    value={hook.password}
                                    onChange={hook.handlePasswordChange}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button variant={"ghost"} h='1.75rem' size='sm' onClick={hook.handleHidePassword}>
                                        {!hook.hidePassword ? <ViewOffIcon/> : <ViewIcon/>}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <InputGroup>
                                <Input
                                    placeholder='비밀번호 확인'
                                    mb={3}
                                    type={hook.hidePasswordCheck ? 'password' : 'text'}
                                    value={hook.passwordCheck}
                                    onChange={hook.handlePasswordCheckChange}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button variant={"ghost"} h='1.75rem' size='sm'
                                            onClick={hook.handleHidePasswordCheck}>
                                        {!hook.hidePasswordCheck ? <ViewOffIcon/> : <ViewIcon/>}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>

                            <FormLabel>닉네임</FormLabel>
                            <Input
                                placeholder='닉네임'
                                mb={3}
                                type='text'
                                value={hook.nickname}
                                onChange={hook.handleNicknameChange}
                            />
                        </FormControl>
                    </Stack>

                    <Stack
                        w={"full"}
                        display={"flex"}
                        height={"full"}
                    >
                        <Text>대표 이미지</Text>
                        <FormLabel
                            m={"auto"}
                            w={{base: "full", md: "180px"}}
                            aspectRatio={1}
                            borderRadius={4}
                            bg={"gray.200"}
                        >

                            {/*이미지 및 프리뷰*/}
                            {
                                hook.image !== "" ?
                                    <Image
                                        w={"full"}
                                        h={"full"}
                                        objectFit={"cover"}
                                        borderRadius={4}
                                        src={hook.image}
                                        alt={"심리테스트 이미지"}/> :
                                    <Box
                                        w={"full"}
                                        h={"full"}
                                        display={"flex"}
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        textAlign={"center"}
                                        color={"gray.400"}
                                    >
                                        <Text>
                                            150x150
                                        </Text>
                                    </Box>
                            }

                            <Input
                                id={"image"}
                                onChange={hook.handleImageChange}
                                hidden={true}
                                type={"file"}
                                accept="image/*"
                            />
                        </FormLabel>

                    </Stack>

                </Stack>
                <Button
                    width={"100%"}
                    color={"white"}
                    bg={colors.key}
                    onClick={hook.requestRegister}
                    isLoading={hook.loadingRegister}
                >
                    회원 가입 요청</Button>
            </>
        )
    }

    return (
        <Stack
            maxW={"500px"}
            width={"80%"}
            height={"80%"}
            mx={"auto"}
            my={"8vh"}
            direction={"column"}
            alignItems={"center"}
        >
            <Stack
                width={"60%"}
            >
                <Text width={"100%"} textAlign={"center"}>{activeStepText}</Text>

                <Stepper size='sm' index={hook.activeStep} gap='1'>
                    {hook.steps.map((step, index) => (
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
                hook.activeStep === 0 ? firstStep() :
                    hook.activeStep === 1 ? secondStep() :
                        hook.activeStep === 2 ? thirdStep() : null
            }
        </Stack>
    )

}

