import {useProcess} from "../hooks/useProcess";
import {Box, Button, Flex, Progress, Stack, Text} from "@chakra-ui/react";
import {colors} from "../types/common";

export const Process = () => {
    const hook = useProcess()

    return (
        <>

            <Stack
                width={"full"}
                overflow={"hidden"}
                id={"query-list"}
            >
                <Stack
                    pos={"absolute"}
                    h={"10px"}
                    w={{base: "100vw", md: "720px"}}
                    m={"0 auto"}
                    left={{base: "calc(calc(100% - 100vw)/2)", md: "calc(calc(100% - 720px)/2)"}}
                    top={"25%"}
                >
                    <Stack
                        pos={"absolute"}
                        h={"100%"}
                        w={"100%"}
                        bg={"gray.200"}
                    />
                    <Stack
                        pos={"absolute"}
                        h={"100%"}
                        w={`calc(100% / ${hook.query.length} * ${hook.queryIndex})`}
                        bg={colors.key}
                        style={{transition: "width 0.1s ease-in-out"}}
                    />
                </Stack>

                <Stack
                    direction={"row"}
                    w={`calc(100% * ${hook.query.length})`}
                    alignItems={"flex-start"}
                    mb={{base: 5, md: 10}}
                >
                    {
                        hook.query.map((item, index) => {
                            return (
                                <Stack
                                    key={index}
                                    width={{base: "100vw", md: "720px"}}
                                    direction={"column"}
                                    h={"calc(100vh - 110px)"}
                                    pos={"relative"}
                                >
                                    <Stack
                                        h={"20%"}
                                        textAlign={"center"}
                                    >
                                        <Flex
                                            h={"100%"}
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                        >
                                            <Text
                                                fontSize={{base: "2xl", md: "4xl"}}
                                                fontWeight={"bold"}
                                            >{item.text}</Text>
                                        </Flex>

                                    </Stack>


                                    <Stack
                                        h={"70%"}
                                        pt={"20%"}
                                        px={5}
                                    >
                                        {item.answers.map((value, index) => {
                                            return (
                                                <Button
                                                    key={index}
                                                    h={"25%"}
                                                    bg={colors.primary}
                                                    textAlign={"center"}
                                                    mb={2}
                                                    onClick={() => {
                                                        hook.toNext(value.resultIndex)
                                                    }}
                                                >
                                                    {value.text}
                                                </Button>
                                            )
                                        })}
                                    </Stack>
                                </Stack>
                            )
                        })
                    }
                </Stack>

            </Stack>


        </>
    )
}
