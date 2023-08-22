import {HStack, Image, Text} from "@chakra-ui/react";

export const ContItem = (src: string, count: number) => {
    return (
        <HStack>
            <Image h={"8px"} src={src}/>
            <Text>
                {count}
            </Text>
        </HStack>
    )
}
