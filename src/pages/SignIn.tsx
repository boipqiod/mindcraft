import React from 'react';
import {Button, Heading, Input, InputGroup, InputRightElement, Box, Text} from "@chakra-ui/react";
import {useSignIn} from "../hooks/useSignIn";
import {usePage} from "../hooks/utils/usePage";

export const SignIn = () => {
    const hook = useSignIn()
    const {toRegister} = usePage()
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const submit = () => {
        hook.signIn(email, password)
    }

    return (
        <Box
            maxW={"300px"}
            width={"80%"}
            mx={"auto"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Heading my={18}>로그인</Heading>
            <Text width={"100%"} textAlign={"left"}>이메일 </Text>
            {/*이메일 입력*/}
            <Input
                fontSize={"1.2rem"}
                placeholder='mindcraft@example.com'
                mb={8}
                type='email'
                value={email}
                onChange={emailChange}
            />


            <Text width={"100%"} textAlign={"left"}>비밀번호 </Text>
            <InputGroup
                size='md'
                mb={8}
            >
                {/*비밀번호 입력*/}
                <Input
                    fontSize={"1.2rem"}
                    pr={'4.5rem'}
                    type={hook.show ? 'text' : 'password'}
                    placeholder='Enter password'
                    value={password}
                    onChange={passwordChange}
                />
                {/*보이기 버튼*/}
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={hook.handleClick}>
                        {hook.show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>


            <Button
                onClick={submit}
                bg={"#F5C31F"}
                width={"100%"}
                mb={5}
            >
                로그인</Button>
            <Button onClick={toRegister} fontWeight={"normal"} variant={'link'}>회원가입</Button>

        </Box>
    )
}

