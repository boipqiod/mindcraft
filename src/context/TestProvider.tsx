import React from "react";
import {MindTestItem, withChildren} from "../types/common";
import {dummy} from "../utils/dummy";

type testProvider = {
    testItemList: MindTestItem[],
    setTestItemList: React.Dispatch<React.SetStateAction<MindTestItem[]>>
}

export const TestContext = React.createContext<testProvider | undefined>(undefined);

export const TestProvider = ({children}: withChildren) => {
    const [testItemList, setTestItemList] = React.useState<MindTestItem[]>([...dummy]);

    return (
        <TestContext.Provider value={{
            testItemList, setTestItemList
        }}>
            {children}
        </TestContext.Provider>
    )
}

