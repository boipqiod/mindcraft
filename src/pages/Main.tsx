import {MainItemList} from "../components/MainItem/MainItemList";
import {Stack, Box, HStack, Button} from "@chakra-ui/react";
import {dummyBest} from "../utils/dummy";
import {colors} from "../types/common";
import {SelectionBadge} from "../components/common/SelectionBadge";
import React from "react";
import {MainItemScrollList} from "../components/MainItem/MainItemScrollList";
import {useMain} from "../hooks/useMain";
import {Helmet} from "react-helmet";


export const Main = () => {
    const main = useMain()

    return (

        <>
            <Helmet>
                <title>MindCraft</title>
                <meta property="og:title" content="MindCraft"/>
                <meta property="og:image" content={"https://boipqiod.github.io/mindcraft/build/static/media/demo3.dcd4cf09be521eff04fb.png"}/>
                <meta property="og:description" content="친구들과 여러가지 테스트를 해보거나,만들어보세요!!"/>
            </Helmet>

            <Stack>
                <Box
                    w={"100%"}
                >
                    <HStack justify={"space-between"} align={"end"}>
                        <SelectionBadge isSelected>추천 리스트</SelectionBadge>
                        <Button color={"white"} mb={3} p={0} bg={colors.key}>+</Button>
                    </HStack>
                    <MainItemScrollList items={dummyBest}/>
                </Box>

                <HStack>
                    <SelectionBadge
                        onClick={() => {
                            main.setSelectedIndex(0);
                        }}
                        isSelected={main.selectedIndex === 0}>최신</SelectionBadge>
                    <SelectionBadge
                        onClick={() => {
                            main.setSelectedIndex(1);
                        }}
                        isSelected={main.selectedIndex === 1}>베스트</SelectionBadge>
                    <SelectionBadge
                        onClick={() => {
                            main.setSelectedIndex(2);
                        }}
                        isSelected={main.selectedIndex === 2}>최다 공유</SelectionBadge>

                </HStack>

                <MainItemList items={main.items}/>

            </Stack>
        </>
    )
}
