import {Heading, HStack, Stack} from "@chakra-ui/react";
import {useCreate} from "../hooks/useCreate";

export const Create = () => {
    const hook = useCreate()

    const basicInfo = () =>{
        return (
            <Stack>
                <HStack>
                </HStack>
                <HStack>
                </HStack>
            </Stack>
        )
    }

    return (
        <Stack w={"full"}>
            {/*타이틀*/}
            <Heading>생성하기</Heading>

            <Stack w={"80%"} bg={"red"}>
                {basicInfo()}
            </Stack>


        </Stack>
    )
}
