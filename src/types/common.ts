import React from "react";

export type withChildren = { children: React.ReactNode };

export enum colors {
    primary = "#80A9A3",
    key = "#F5C31F",
}

/**** 메인 아이템 관련 ****/

export type MindTestItem = {
    id: number;
    title: string;
    playedCount: number;
    sharedCount: number;
    description: string;
    url: string;
    userId: number;
}

export type MainTestBasicInfo = {
    title: string,
    description: string,
    image: string,
    resultCount: 3 | 4 | 5,
    queryCount: 3 | 4 | 5,
    answerCount: 2 | 3 | 4,
}

export type MindTestResultItem = {
    title: string
    description: string
    image: string
}


export type MindTestQueryItem = {
    step: number
    text: string
    answers: MindTestAnswerItem[]
}

export type MindTestAnswerItem = {
    text: string
    resultIndex: number
}
