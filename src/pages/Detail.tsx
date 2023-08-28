import {Button, Heading, HStack, Image, Stack, Text} from "@chakra-ui/react";
import {useDetail} from "../hooks/useDetail";
import {ContItem} from "../components/MainItem/ContItem";
import i_play from "../assets/i-play-g.png";
import i_share from "../assets/i-share-g.png";
import React from "react";
import {useShare} from "../hooks/utils/useShare";
import {Helmet} from "react-helmet";

export const Detail = () => {
    const hook = useDetail()
    const {share} = useShare()

    const onShare = () => {
        if (!hook.item) return
        share(hook.item.title ?? "MindCraft", `${window.location.href}`).then()
    }
    return (
        <>
            <Helmet>
                <title>MindCraft: {hook.item?.title ?? ""}</title>
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
                    onClick={hook.toBack}
                >{"<"}</Button>

                <Heading
                    width={"full"}
                    textAlign={"center"}
                    mb={10}
                >{hook.item?.title}</Heading>

                <Stack
                    width={{base: "90%", md: "300px"}}
                    alignItems={"center"}
                >
                    <Image
                        src={hook.item?.url}
                        aspectRatio={3 / 4}
                        borderRadius={4}
                        objectFit='cover'
                    />

                    <Text
                        p={5}
                        mb={10}
                        textAlign={"center"}
                    >
                        {hook.item?.description}
                    </Text>

                    <HStack
                        fontSize={"xs"}
                        mb={3}
                    >
                        {ContItem(i_play, hook.item?.playedCount ?? 0)}
                        {ContItem(i_share, hook.item?.sharedCount ?? 0)}
                    </HStack>
                    <Button
                        bg={"#F5C31F"}
                        width={"100%"}
                        mb={5}
                        onClick={hook.toDetail}
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
