import {
    Box,
    FormLabel,
    Heading,
    HStack,
    Image,
    Input,
    Select,
    Stack,
    Tag,
    Text,
    Textarea,
    Tooltip
} from "@chakra-ui/react";
import {useCreate} from "../hooks/useCreate";
import {KeyButton} from "../components/common/KeyButton";
import {InfoOutlineIcon} from "@chakra-ui/icons";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles

export const Create = () => {
    const hook = useCreate()

    const basicInfo = () => {
        return (
            <>
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
                            w={"full"}
                            alignItems={"flex-start"}
                        >
                            <Text
                                fontSize={"lg"}
                            >테스트 이미지</Text>
                            {/*이미지 인풋*/}
                            <FormLabel
                                w={"full"}
                                aspectRatio={3 / 4}
                                borderRadius={4}
                                bg={"gray.200"}
                            >

                                {/*이미지 및 프리뷰*/}
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

                    {/*숫자에 대한 값*/}
                    <Stack
                        w={"full"}
                        direction={{base: "column", md: "row"}}
                        mb={{base: 5, md: 10}}
                    >
                        <Stack
                            w={"full"}
                        >
                            <HStack>
                                <Text>결과 수</Text>
                                <Tooltip mx={10} label={"테스트 진행 후 사용자에게 보여질 수 있는 결과 수 입니다.(3~5개)"}>
                                    <InfoOutlineIcon/>
                                </Tooltip>
                            </HStack>
                            <Input
                                aria-label={"테스트 결과 수"}
                                id={"result-count"}
                                onChange={hook.handleBasicInfoInput}
                                value={hook.basicInfo.resultCount}
                                placeholder={"결과 수 (3~5개)"}
                                type={"number"}
                                max={5}
                                min={3}
                            />
                        </Stack>
                        <Stack
                            w={"full"}
                        >
                            <HStack>
                                <Text>질문 수</Text>
                                <Tooltip mx={10} label={"사용자가 진행할 질문 수입니다. (3~5개)"}>
                                    <InfoOutlineIcon/>
                                </Tooltip>
                            </HStack>
                            <Input
                                id={"query-count"}
                                onChange={hook.handleBasicInfoInput}
                                value={hook.basicInfo.queryCount}
                                placeholder={"질문 수"}
                                type={"number"}
                                max={5}
                                min={3}
                            />
                        </Stack>
                        <Stack
                            w={"full"}
                        >
                            <HStack>
                                <Text>응답 수</Text>
                                <Tooltip mx={10} label={"사용자가 진행할 질문의 대답의 수입니다. (2~4개)"}>
                                    <InfoOutlineIcon/>
                                </Tooltip>
                            </HStack>

                            <Input
                                id={"answer-count"}
                                onChange={hook.handleBasicInfoInput}
                                value={hook.basicInfo.answerCount}
                                placeholder={"질문 수"}
                                type={"number"}
                                max={4}
                                min={2}
                            />
                        </Stack>
                    </Stack>
                </Stack>

                <KeyButton onClick={hook.basicInfoNext}
                           text={"다음"}/>
            </>


        )
    }

    const result = () => {
        return (
            <>
                <HStack
                    mb={10}
                >
                    {
                        hook.resultItems.map((item, index) => {
                            return (
                                <Tag
                                    key={index}
                                    onClick={() => hook.setResultScroll(index)}
                                    cursor={"pointer"}
                                    colorScheme={hook.resultShowIndex === index ? "blue" : "gray"}
                                >
                                    {index + 1}
                                </Tag>
                            )
                        })
                    }
                </HStack>

                <Stack
                    width={"full"}
                    overflow={"hidden"}
                    id={"result-item-list"}
                    sx={{
                        '&::-webkit-scrollbar': {
                            display: 'none'
                        },
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    <Stack
                        direction={"row"}
                        w={`calc(100% * ${hook.resultItems.length})`}
                        alignItems={"flex-start"}
                        mb={{base: 5, md: 10}}
                    >
                        {
                            hook.resultItems.map((item, index) => {
                                return (
                                    <Stack
                                        key={index}
                                        // hidden={hook.resultShowIndex !== index}
                                        id={`result-item-${index}`}
                                        w={"100%"}>
                                        <Text
                                            fontSize={"lg"}
                                        >결과 이름</Text>
                                        <Input
                                            id={"result-item-title"}
                                            onChange={hook.handleResultItemInput}
                                            data-index={index}
                                            value={hook.resultItems[index]?.title}
                                            placeholder={"심리테스트 제목을 입력해주세요."}
                                            mb={5}
                                        />
                                        <Text
                                            fontSize={"lg"}
                                        >결과 이미지</Text>
                                        {/*이미지 인풋*/}
                                        <Box
                                            mb={5}
                                        >
                                            <FormLabel
                                                m={"auto"}
                                                maxW={{base: "full", md: "200px"}}
                                                aspectRatio={3 / 4}
                                                borderRadius={4}
                                                bg={"gray.200"}
                                            >

                                                {/*이미지 및 프리뷰*/}
                                                {
                                                    hook.basicInfo.image !== "" ?
                                                        <Image
                                                            w={"full"}
                                                            h={"full"}
                                                            objectFit={"cover"}
                                                            borderRadius={4}
                                                            src={hook.resultItems[index]?.image}
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
                                                    id={"result-item-image"}
                                                    onChange={hook.handleResultItemInput}
                                                    hidden={true}
                                                    type={"file"}
                                                    accept="image/*"
                                                    data-index={index}
                                                />
                                            </FormLabel>
                                        </Box>

                                        <Text
                                            fontSize={"lg"}
                                        >테스트 설명</Text>
                                        <ReactQuill
                                            value={hook.resultItems[index]?.description}
                                            data-index={hook.resultShowIndex}
                                            onChange={hook.handleResultHtmlInput}
                                        />
                                    </Stack>)
                            })
                        }
                    </Stack>
                </Stack>
                <KeyButton onClick={hook.resultNext}
                           text={"다음"}/>
            </>
        )
    }

    const question = () => {
        return (
            <>
                <HStack
                    mb={10}
                >
                    {
                        hook.queryItems.map((item, index) => {
                            return (
                                <Tag
                                    key={index}
                                    onClick={() => hook.setQueryScroll(index)}
                                    cursor={"pointer"}
                                    colorScheme={hook.queryShowIndex === index ? "blue" : "gray"}
                                >
                                    {index + 1}
                                </Tag>
                            )
                        })
                    }
                </HStack>

                <Stack
                    width={"full"}
                    overflow={"hidden"}
                    id={"query-item-list"}
                    sx={{
                        '&::-webkit-scrollbar': {
                            display: 'none'
                        },
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    <Stack
                        direction={"row"}
                        w={`calc(100% * ${hook.resultItems.length})`}
                        alignItems={"flex-start"}
                        mb={{base: 5, md: 10}}
                    >
                        {
                            hook.resultItems.map((item, index) => {
                                return (
                                    <Stack
                                        key={index}
                                        // hidden={hook.resultShowIndex !== index}
                                        id={`result-item-${index}`}
                                        w={"100%"}>
                                        <Text
                                            fontSize={"lg"}
                                        >질문</Text>
                                        <Input
                                            id={"query-item-text"}
                                            onChange={hook.handleQueryItemInput}
                                            data-index={index}
                                            value={hook.queryItems[index]?.text}
                                            placeholder={"질문의 내용을 작성해주세요"}
                                            mb={5}
                                        />

                                        <Text
                                            fontSize={"lg"}
                                        >답변 / 영향을 주는 결과</Text>
                                        {hook.queryItems[index]?.answers.map((answer, answerIndex) => {
                                            return (
                                                <Stack
                                                    key={answerIndex}
                                                    w={"full"}
                                                    direction={"row"}
                                                    alignItems={"center"}
                                                    mb={5}

                                                >
                                                    <Input
                                                        id={"query-item-answer"}
                                                        onChange={hook.handleQueryItemInput}
                                                        data-index={answerIndex}
                                                        value={hook.queryItems[index]?.answers[answerIndex]?.text}
                                                        placeholder={"질문의 내용을 작성해주세요"}
                                                    />
                                                    <Select
                                                        id={"query-item-result"}
                                                        onChange={hook.handleQueryItemInput}
                                                        data-index={answerIndex}
                                                    >
                                                        {hook.resultItems.map((item, index) => {
                                                            return (
                                                                <option key={index} value={index}>{item.title}</option>
                                                            )
                                                        })}
                                                    </Select>
                                                </Stack>)
                                        })}
                                    </Stack>)
                            })
                        }
                    </Stack>
                </Stack>
                <KeyButton onClick={hook.submit}
                           text={"제출"}/>
            </>
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

                {
                    hook.step === 0 ?
                        <>{basicInfo()}</> :
                        hook.step === 1 ?
                            <>{result()}</> :
                            hook.step === 2 ?
                                <>{question()}</> :
                                <></>
                }
            </Stack>
        </Stack>
    )
}
