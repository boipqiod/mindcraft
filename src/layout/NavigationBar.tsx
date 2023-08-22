import React from "react";
import {Box, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import '../public/styles/navi.css';
import {Image} from '@chakra-ui/react'
import {Avatar} from '@chakra-ui/react'

import logo from '../assets/mindcraft_logo.png';
import {usePage} from "../hooks/utils/usePage";
import {AuthContext} from "../context/AuthProvider";

export const NavigationBar = () => {
    const {auth, setAuth} = React.useContext(AuthContext)!
    const {toMain, toSignIn} = usePage()

    const MenuItems = () => {
        return auth ?
            <MenuList>
                <MenuItem>마이 페이지</MenuItem>
                <MenuItem>테스트 만들기</MenuItem>
                <MenuItem
                    onClick={() => {setAuth(false)}}
                >로그아웃</MenuItem>
            </MenuList> :
            <MenuList>
                <MenuItem
                    onClick={toSignIn}
                >로그인</MenuItem>
            </MenuList>
    }

    return (
        <Box className="navigation-bar">
            <Image
                width={150}
                objectFit='scale-down'
                src={logo}
                alt="logo"
                onClick={toMain}
                cursor={"pointer"}
            />

            <Menu>
                <MenuButton
                    boxSize={10}
                >
                    <Avatar width={"100%"} height={"100%"} src='https://bit.ly/broken-link'/>
                </MenuButton>

                {MenuItems()}
            </Menu>

        </Box>
    )
}
