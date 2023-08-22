import {MainItemList} from "../components/MainItem/MainItemList";
import {Stack, Box, HStack, Button} from "@chakra-ui/react";
import {dummyBest} from "../utils/dummy";
import {colors} from "../types/common";
import {SelectionBadge} from "../components/common/SelectionBadge";
import React from "react";
import {MainItemScrollList} from "../components/MainItem/MainItemScrollList";
import {useMain} from "../hooks/useMain";
import {Helmet} from "react-helmet";
import logo from "../assets/i-logo.png";


export const Main = () => {
    const main = useMain()

    return (

        <>
            <Helmet>
                <meta property="og:url" content={window.location.href}/>
                <meta property="og:title" content="MindCraft"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content={logo}/>
                <meta property="og:description" content="여러 테스트를 만들고 친구들과 공유해보세요!"/>
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
