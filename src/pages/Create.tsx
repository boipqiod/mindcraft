import {Box, FormLabel, Heading, Image, Input, Stack, Text, Textarea} from "@chakra-ui/react";
import {useCreate} from "../hooks/useCreate";
import React from "react";
import {KeyButton} from "../components/common/KeyButton";

export const Create = () => {
    const hook = useCreate()

    const basicInfo = () => {
        return (
            <Stack>
                <Stack
                    direction={{base: "column", md: "row"}}
                    w={"full"}
                    alignItems={"flex-start"}
                    mb={{base: 5, md: 10}}
                >
                    {/*타이틀 및 텍스트 영역*/}
                    <Stack
                        m={2}
                        w={"full"}>
                        <Text
                            fontSize={"lg"}
                        >테스트 제목</Text>
                        <Input
                            id={"title"}
                            onChange={hook.handleBasicInfoInput}
                            value={hook.basicInfo.title}
                            placeholder={"심리테스트 제목을 입력해주세요."}
                        />
                        <Text
                            fontSize={"lg"}
                        >테스트 설명</Text>
                        <Textarea
                            id={"description"}
                            onChange={hook.handleBasicInfoInput}
                            value={hook.basicInfo.description}
                            rows={12}
                            placeholder={"심리테스트에 대한 설명을 입력해주세요."}
                        />
                    </Stack>
                    <Stack
                        m={2}
                        w={"full"}>
                        <Text
                            fontSize={"lg"}
                        >테스트 이미지</Text>
                        <FormLabel
                            w={"full"}
                            aspectRatio={3 / 4}
                            borderRadius={4}
                            bg={"gray.200"}
                        >

                            {
                                hook.basicInfo.image !== "" ?
                                    <Image
                                        w={"full"}
                                        h={"full"}
                                        objectFit={"cover"}
                                        borderRadius={4}
                                        src={hook.basicInfo.image}
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
                                            이미지를 업로드해주세요.<br/>
                                            (3:4 비율 권장)
                                        </Text>
                                    </Box>
                            }

                            <Input
                                id={"image"}
                                onChange={hook.handleBasicInfoInput}
                                hidden={true}
                                type={"file"}
                                accept="image/*"
                            />
                        </FormLabel>
                    </Stack>
                </Stack>
                <KeyButton onClick={()=>{}}
                           text={"다음"}/>
            </Stack>
        )
    }

    return (
        <Stack height={"80%"} w={"full"}>
            {/*타이틀*/}
            <Heading
                fontSize={"3xl"}
                mb={5}
            >생성하기</Heading>

            <Stack>
                {basicInfo()}
            </Stack>


        </Stack>
    )
}
