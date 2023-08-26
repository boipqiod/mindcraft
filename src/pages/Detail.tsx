import {Button, Heading, HStack, Image, Stack, Text} from "@chakra-ui/react";
import {useDetail} from "../hooks/useDetail";
import {ContItem} from "../components/MainItem/ContItem";
import i_play from "../assets/i-play-g.png";
import i_share from "../assets/i-share-g.png";
import React from "react";
import {useShare} from "../hooks/utils/useShare";
import {Helmet} from "react-helmet";
export const Detail = () => {
    const {item, toBack} = useDetail()
    const {share} = useShare()

    const onShare = () => {
        if (!item) return
        share(item.title ?? "MindCraft", `${window.location.href}`).then()
    }
    return (
        <>
            <Helmet>
                <title>MindCraft: {item?.title ?? ""}</title>
                <meta property="og:title" content={item?.title}/>
                <meta property="og:image" content={"https://boipqiod.github.io/mindcraft/build/static/media/demo10.0851f31bb2c0b79a3752.png"}/>
                <meta property="og:description" content={item?.description}/>
            </Helmet>

            <Stack
                pos={"relative"}
                alignItems={"center"}
            >
                <Button
                    pos={"absolute"}
                    left={0}
                    colorScheme={"transparent"}
                    color={"black"}
                    onClick={toBack}
                >{"<"}</Button>

                <Heading
                    width={"full"}
                    textAlign={"center"}
                    mb={10}
                >{item?.title}</Heading>

                <Stack
                    width={{base: "90%", md: "300px"}}
                    alignItems={"center"}
                >
                    <Image
                        src={item?.url}
                        aspectRatio={3 / 4}
                        borderRadius={4}
                        objectFit='cover'
                    />

                    <Text
                        p={5}
                        mb={10}
                        textAlign={"center"}
                    >
                        {item?.description}
                    </Text>

                    <HStack
                        fontSize={"xs"}
                        mb={3}
                    >
                        {ContItem(i_play, item?.playedCount ?? 0)}
                        {ContItem(i_share, item?.sharedCount ?? 0)}
                    </HStack>
                    <Button
                        bg={"#F5C31F"}
                        width={"100%"}
                        mb={5}
                    >시작하기</Button>
                    <Button
                        onClick={onShare}
                        fontWeight={"normal"}
                        variant={'link'}>공유하기</Button>
                </Stack>
            </Stack>
        </>

    )
}
