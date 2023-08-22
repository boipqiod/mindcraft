import { MainItemList } from "../components/MainItem/MainItemList";
import { Stack, Box, HStack, Button } from "@chakra-ui/react";
import { dummyBest } from "../utils/dummy";
import { colors } from "../types/common";
import { SelectionBadge } from "../components/common/SelectionBadge";
import React from "react";
import { MainItemScrollList } from "../components/MainItem/MainItemScrollList";
import {useMain} from "../hooks/useMain";


export const Main = () => {

    const main = useMain()

    return (
        <Stack>
            <Box
                w={"100%"}
            >
                <HStack justify={"space-between"} align={"end"}>
                    <SelectionBadge isSelected>추천 리스트</SelectionBadge>
                    <Button color={"white"} mb={3} p={0} bg={colors.key}>+</Button>
                </HStack>
                <MainItemScrollList items={dummyBest} />
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

            <MainItemList items={main.items} />

        </Stack>
    )
}
