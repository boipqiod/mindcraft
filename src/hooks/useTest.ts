import { useContext } from "react";
import { TestContext } from "../context/TestProvider";
import { MindTestItem } from "../types/common";

export const useTest = () => {
    const context = useContext(TestContext)!

    const getTestList = (): MindTestItem[] => {
        return context.testItemList
    }
    const getTestDetail = (id: number): MindTestItem | undefined => {
        return context.testItemList.find(test => test.id === id)
    }

    return {
        getTestList,
        getTestDetail,
    };
}
