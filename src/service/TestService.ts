import {request} from "../types/api.request";
import {Requester} from "../utils/Requester";
import {response} from "../types/api.response";
import {APIConfig} from "../types/api.config";

export default class TestService{

    static async getTestList(){
        return await Requester.instance.request<undefined, response.test.testItem>(APIConfig.test.getTestList)
    }
    static async getTestDetail(id: number){
        const data: request.test.getTestDetail = {
            id: id
        }
        return await Requester.instance.request<typeof data, response.test.testItemDetail>(APIConfig.test.getTestDetail, data)
    }
    static async createTest(title: string, description: string, query: {step: number, text: string, answer: {text: string}[]}[]){
        const data: request.test.createTest = {
            title: title,
            description: description,
            query: query
        }
        return await Requester.instance.request<typeof data, response.test.testItemCreate>(APIConfig.test.createTest, data)
    }
}
