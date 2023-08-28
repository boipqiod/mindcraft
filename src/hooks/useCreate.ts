import React, {useEffect, useState} from "react";
import {MainTestBasicInfo, MindTestAnswerItem, MindTestQueryItem, MindTestResultItem} from "../types/common";
import AnimationUtil from "../utils/AnimationUtil";

export const useCreate = () => {

    const [step, setStep] = useState(0);

    const [basicInfo, setBasicInfo] = React.useState<MainTestBasicInfo>({
        title: "",
        description: "",
        image: "",
        resultCount: 3,
        queryCount: 3,
        answerCount: 2,
    });

    //결과 정보
    const [resultItems, setResultItems] = React.useState<MindTestResultItem[]>([]);

    //질문 정보
    const [queryItems, setQueryItems] = React.useState<MindTestQueryItem[]>([]);

    const [resultShowIndex, setResultShowIndex] = useState(0);
    const [queryShowIndex, setQueryShowIndex] = useState(0);

    useEffect(() => {

    }, [])

    const basicInfoNext = () => {
        //TODO: 기본 정보 검증

        initResultItems()
        initQueryItems()
        setStep(prevState => prevState + 1);
    }

    const resultNext = () => {
        //TODO: 결과 정보 검증

        setStep(prevState => prevState + 1);
    }

    const submit = () => {
        //TODO : 질문 정보 검증


        console.log("basicInfo", basicInfo)
        console.log("resultItems", resultItems)
        console.log("queryItems", queryItems)
    }

    /**** 초기화 함수 ***/
    const initResultItems = () => {
        const items: MindTestResultItem[] = [];
        for (let i = 0; i < basicInfo.resultCount; i++) {
            items.push({
                title: "",
                description: "",
                image: "",
            });
        }
        setResultItems(items);
    }

    const initQueryItems = () => {
        const items: MindTestQueryItem[] = [];
        for (let i = 0; i < basicInfo.queryCount; i++) {
            items.push({
                step: i + 1,
                text: "",
                answers: [],
            });
        }

        items.map((queryItem) => {
            for (let i = 0; i < basicInfo.answerCount; i++) {
                queryItem.answers.push({
                    text: "",
                    resultIndex: 0,
                });
            }
        })

        setQueryItems(items);
    }

    /**** 이벤트 핸들러 ****/
    const handleBasicInfoInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        setBasicInfo(prev => {
            console.log(basicInfo)
            const newInfo = {...prev};
            switch (e.target.id) {
                case "title":
                    newInfo.title = value;
                    break;
                case "description":
                    newInfo.description = value;
                    break;
                case "image":
                    const target = e.target as HTMLInputElement;
                    const file = target.files?.[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            setBasicInfo(prev => ({
                                ...prev,
                                image: reader.result as string,
                            }));
                        };
                        reader.readAsDataURL(file);
                    }
                    break;
                case "result-count":
                    let resultCount = Number(value.at(value.length - 1)) as 3 | 4 | 5;
                    if (resultCount < 3) resultCount = 3;
                    if (resultCount > 5) resultCount = 5;
                    newInfo.resultCount = resultCount;
                    break;
                case "query-count":
                    let queryCount = Number(value.at(value.length - 1)) as 3 | 4 | 5;
                    if (queryCount < 3) queryCount = 3;
                    if (queryCount > 5) queryCount = 5;
                    newInfo.queryCount = queryCount;
                    break;
                case "answer-count":
                    let answerCount = Number(value.at(value.length - 1)) as 2 | 3 | 4;
                    if (answerCount < 2) answerCount = 2;
                    if (answerCount > 4) answerCount = 4;
                    newInfo.answerCount = answerCount;
                    break;
            }

            return newInfo;
        });
    }

    const handleResultItemInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const _index = e.target.dataset.index;
        const index = Number(_index);

        const value = e.target.value;
        setResultItems(prev => {
            const newItems = [...prev];
            switch (e.target.id) {
                case "result-item-title":
                    newItems[index].title = value;
                    break;
                case "result-item-image":
                    const target = e.target as HTMLInputElement;
                    const file = target.files?.[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            newItems[index].image = reader.result as string;
                            setResultItems(newItems);
                        };
                        reader.readAsDataURL(file);
                    }
                    break;
            }
            return newItems;
        });
    }

    const handleQueryItemInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const _index = e.target.dataset.index;
        const index = Number(_index);

        const value = e.target.value;
        setQueryItems(prev => {
            const newItems = [...prev];
            switch (e.target.id) {
                case "query-item-text":
                    newItems[index].text = value;
                    break;
                case "query-item-answer":
                    newItems[queryShowIndex].answers[index].text = value;
                    break;
                case "query-item-result":
                    newItems[queryShowIndex].answers[index].resultIndex = Number(value);
                    break;
            }

            console.log(newItems)

            return newItems;
        });
    }

    const handleResultHtmlInput = (value: string) => {
        setResultItems(prev => {
            const newItems = [...prev];
            newItems[resultShowIndex].description = value;
            return newItems;
        })
    };


    /**** 기타 함수 ****/
    const setResultScroll = async (index: number) => {
        setResultShowIndex(index);
        await new Promise(resolve => setTimeout(resolve, 0)); // 상태 업데이트를 기다림

        const target = document.getElementById('result-item-list')
        if (!target) {
            console.error("Element not found");
            return;
        }

        await AnimationUtil.smoothScroll(target, target.offsetWidth * index, 0, 300)
    }

    const setQueryScroll = async (index: number) => {
        setQueryShowIndex(index);
        await new Promise(resolve => setTimeout(resolve, 0)); // 상태 업데이트를 기다림

        const target = document.getElementById('query-item-list')
        if (!target) {
            console.error("Element not found");
            return;
        }

        await AnimationUtil.smoothScroll(target, target.offsetWidth * index, 0, 300)
    }


    return {
        basicInfo,
        resultItems,
        queryItems,
        handleBasicInfoInput,
        handleResultItemInput,
        handleQueryItemInput,
        handleResultHtmlInput,

        resultShowIndex, setResultScroll,
        queryShowIndex, setQueryScroll,

        step,

        basicInfoNext, resultNext, submit
    };
}
