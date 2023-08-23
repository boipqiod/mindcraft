import React from "react";
import {TestContext} from "../context/TestProvider";
import {usePage} from "./utils/usePage";

export const useMain = () => {

    const context = React.useContext(TestContext)!;
    const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
    const {toCreate} = usePage()

    return {
        selectedIndex, setSelectedIndex,
        items: context.testItemList,

        toCreate,
    };
}
