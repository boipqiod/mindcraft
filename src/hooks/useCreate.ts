import React from "react";
import {MindTestQueryItem, MindTestResultItem} from "../types/common";

export const useCreate = () => {


    const [basicInfo, setBasicInfo] = React.useState<{title: string, description: string, image: string}>({
        title: "",
        description: "",
        image: "",
    });

    //결과 정보
    const [resultItems, setResultItems] = React.useState<MindTestResultItem[]>([]);

    //질문 정보
    const [queryItems, setQueryItems] = React.useState<MindTestQueryItem[]>([]);

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
            }

            console.log(newInfo)
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
                case "result-item-description":
                    newItems[index].description = value;
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

    const handleQueryItemInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const _index = e.target.dataset.index;
        const index = Number(_index);

        const value = e.target.value;
        setQueryItems(prev => {
            const newItems = [...prev];
            switch (e.target.id) {
                case "query-item-step":
                    newItems[index].step = Number(value);
                    break;
                case "query-item-text":
                    newItems[index].text = value;
                    break;
            }
            return newItems;
        });
    }

    return {
        basicInfo,
        resultItems,
        queryItems,
        handleBasicInfoInput,
        handleResultItemInput,
        handleQueryItemInput,
    };
}
