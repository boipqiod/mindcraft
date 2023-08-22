import { useContext } from "react";
import { TestContext } from "../context/TestProvider";
import { MindTest } from "../types/common";

export const useTest = () => {
    const context = useContext(TestContext)!

    const getTestList = (): MindTest[] => {
        return context.testItemList
    }
    const getTestDetail = (id: number): MindTest | undefined => {
        return context.testItemList.find(test => test.id === id)
    }

    return {
        getTestList,
        getTestDetail,
    };
}
