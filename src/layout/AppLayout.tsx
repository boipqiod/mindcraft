import React from "react";
import {Box} from "@chakra-ui/react";
import {NavigationBar} from "./NavigationBar";
import {withChildren} from "../types/common";

export const AppLayout = ({children}: withChildren) => {
    return (
        <Box
            width={{ base: '100%', md: '720px' }}
            m={"0 auto"}
            bg={"white"}
            position={"relative"}
        >
            <NavigationBar />
            <Box
                padding={5}
                width={{ base: "95vw", md: '540px' }}

                m={"0 auto"}
            >
                {children}
            </Box>
        </Box>
    )
}
