import { Box } from '@chakra-ui/react';
import { MindTestItem } from '../../types/common';
import { MainItem } from './MainItem';

type MainItemListProps = {
    items: MindTestItem[];
}

export const MainItemScrollList = (props: MainItemListProps) => {

    return (
        <Box
            display="flex"
            overflow="auto"

        >
            {props.items.map((item, index) => (
                <MainItem
                    key={index}
                    id={item.id}
                    title={item.title}
                    sharedCount={item.sharedCount}
                    playedCount={item.playedCount}
                    url={item.url}
                />
            ))}
        </Box>
    )
}
