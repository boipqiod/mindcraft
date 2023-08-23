import {Button} from "@chakra-ui/react";
import {colors} from "../../types/common";
import React from "react";

type KeyButtonProps = {
    onClick: () => void
    width?: string
    isLoading?: boolean
    text?: string
}

export const KeyButton = (props:KeyButtonProps) =>{
    return (
        <Button
            width={props.width ?? "100%"}
            color={"white"}
            bg={colors.key}
            onClick={props.onClick}
            isLoading={props.isLoading}
            mb={3}
        >
            {props.text}
        </Button>
    )

}
