import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {MindTestItem} from "../types/common";
import {useTest} from "./useTest";
import {FromUtil} from "../utils/FromUtil";
import {usePage} from "./utils/usePage";

export const useDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState<MindTestItem>()

    const {getTestDetail} = useTest()
    const {toMain, toBack} = usePage()

    useEffect(()=>{
        window.scrollTo(0,0)

        if(id && FromUtil.instance.checkNumber(id)){
            const _id = Number(id)
            const item = getTestDetail(_id)
            if(!item) {
                alert("잘못된 접근입니다.")
                toMain()
                return
            }

            setItem(item)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return {
        item, toBack
    };
}
