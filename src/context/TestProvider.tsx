import React from "react";
import {MindTest, withChildren} from "../types/common";
import {dummy} from "../utils/dummy";

type testProvider = {
    testItemList: MindTest[],
    setTestItemList: React.Dispatch<React.SetStateAction<MindTest[]>>
}

export const TestContext = React.createContext<testProvider | undefined>(undefined);

export const TestProvider = ({children}: withChildren) => {
    const [testItemList, setTestItemList] = React.useState<MindTest[]>([...dummy]);

    return (
        <TestContext.Provider value={{
            testItemList, setTestItemList
        }}>
            {children}
        </TestContext.Provider>
    )
}

