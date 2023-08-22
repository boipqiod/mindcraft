import axios, {AxiosInstance} from "axios";
import {ApiConfig, httpContentType, httpMethod} from "../types/api.config";
import {AxiosRequestConfig} from "axios";
import APIResponse from "../types/api.response";
import Logger from "./Logger";


export class Requester {

    static get instance() {
        if (!Requester._instance) Requester._instance = new Requester()
        return Requester._instance
    }

    private static _instance: Requester

    private axios: AxiosInstance

    private constructor() {
        this.axios = axios.create({
            baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
        })
    }

    private setConfig = <T>(apiConfig: ApiConfig, data: T): AxiosRequestConfig => {

        const config: AxiosRequestConfig = {
            method: apiConfig.method,
            url: apiConfig.url
        }

        //get 일때 prams 로 셋팅
        if (apiConfig.method === httpMethod.get) config.params = data
        //form 데이터면 데이터 form 데이터로 변환
        else if (apiConfig.contentType === httpContentType.form) config.data = this.transToFromData(data)
        //나머지는 그냥 데이터 적용
        else config.data = data

        return config
    }

    request = async <T, U>(apiConfig: ApiConfig, data?: T): Promise<APIResponse<U>> => {

        const config = this.setConfig(apiConfig, data)

        try {
            const response = await this.axios.request(config)
            const res = new APIResponse<U>(response.data.statusCode, response.data.message, response.data.data as U)

            if (res.isError) {
                this.failLog(config, data, response.data)
            } else {
                this.successLog(config, data, res)
            }
            return res

        } catch (error: any) {

            let e: any
            let message: string
            let status: number = 5050

            // 서버 응답 에러 (status code가 2xx가 아닌 경우)
            if (error.response) {
                e = error.response
                status = error.response.status
                message = "http 응답 실패"

                // 요청이 전송되었으나 응답이 없는 경우 (네트워크 에러 등)
            } else if (error.request) {
                e = error.request
                message = "응답 없음"

                // 그 외에 발생한 에러
            } else {
                e = error.message
                message = "에러 메시지 확인"
                status = 5051
            }

            const res = new APIResponse<U>(status, message)
            this.errorLog(apiConfig, data, e, res)
            return res
        }
    }

    private transToFromData = <T>(data: T): FormData => {
        const formData = new FormData()

        for (const key in data) {
            const _data = data[key]
            if (typeof _data === 'string' || _data instanceof Blob || _data instanceof File) {
                formData.set(key, _data)
            } else if (Array.isArray(_data)) {

                for (const item of _data) {
                    if (typeof item === 'string' || item instanceof Blob || item instanceof File) {
                        formData.set(key, item)
                    }
                }

            } else if (_data !== null && _data !== undefined) {
                formData.set(key, String(_data))
            }
        }

        console.log(formData)

        return formData
    }

    private errorLog = <T, U>(config: AxiosRequestConfig, body: T, error: any, data: U) => {
        Logger.error(
            "\n====REQUEST====",
            "\nBaseUrl\n", process.env.REACT_APP_API_BASE_URL,
            "\napiConfig\n", config,
            "\nbody\n", body,
            "\n\n=====ERROR=====",
            "\ndata\n", data,
            "\nerror\n", error,
        )
    }

    private failLog = <T, U>(config: AxiosRequestConfig, body: T, data: U) => {
        Logger.warn(
            "\n====REQUEST====",
            "\nBaseUrl\n", process.env.REACT_APP_API_BASE_URL,
            "\napiConfig\n", config,
            "\nbody\n", body,
            "\n\n=====ERROR=====",
            "\nResponse\n", data
        )
    }

    private successLog = <T, U>(config: AxiosRequestConfig, body: T, data: U) => {
        Logger.log(
            "\n====REQUEST====",
            "\nBaseUrl\n", process.env.REACT_APP_API_BASE_URL,
            "\napiConfig\n", config,
            "\nbody\n", body,
            "\n\n====RESPONSE====\n",
            data)
    }

}
