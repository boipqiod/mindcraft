import {useState} from "react";
import {MindTestQueryItem} from "../types/common";
import {testDetialDummy} from "../utils/dummy";
import {deflateRaw} from "zlib";
import AnimationUtil from "../utils/AnimationUtil";

export const useProcess = () => {
    const [queryIndex, setQueryIndex] = useState<number>(0)
    const [query, setQuery] = useState<MindTestQueryItem[]>(testDetialDummy)
    const [selected, setSelected] = useState<{step: number, index: number}[]>([])

    const toNext = async (selectIndex: number) => {
        setSelected([...selected, {step: queryIndex, index: selectIndex}])
        //에니메이션 처리
        const target = document.getElementById("query-list")
        if(!target) return
        await AnimationUtil.smoothScroll(target, target.offsetWidth * (queryIndex+1), 0, 100)
        setQueryIndex(queryIndex + 1)

        //TODO : 완료가 된 상태 처리
        if(query.length === queryIndex + 1) {
            console.log(selected)
        }

    }

    return {
        queryIndex,

        query,

        toNext
    }
}
