import { Badge, Box } from "@chakra-ui/react";
import { colors } from "../../types/common";

type SelectionBadgeProps = {
    children?: React.ReactNode;
    isSelected?: boolean;
    onClick?: () => void;
}

export const SelectionBadge = (props: SelectionBadgeProps) => {

    return (
        <Box mt={10} mb={3}>
            {props.isSelected ?
                <Badge
                    boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                    fontSize={14} px={3} borderRadius={4} bg={colors.key} color={'white'} fontWeight={"bold"}>{props.children}</Badge> :
                <Badge
                    boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                    cursor={"pointer"}
                    onClick={props.onClick}
                    fontSize={14} px={3} borderRadius={4} fontWeight={"normal"} >{props.children}

                </Badge>
            }
        </Box>
    )
}
