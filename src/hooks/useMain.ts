import React from "react";
import {TestContext} from "../context/TestProvider";

export const useMain = () => {

    const context = React.useContext(TestContext)!;
    const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

    return {
        selectedIndex, setSelectedIndex,

        items: context.testItemList,
    };
}
