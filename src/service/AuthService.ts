import {Requester} from "../utils/Requester";
import APIResponse, {response} from "../types/api.response";
import {request} from "../types/api.request";
import {APIConfig} from "../types/api.config";

export class AuthService{

    static async register(email: string, password: string, nickname: string, image: string): Promise<APIResponse<response.auth.register>> {
        const data: request.auth.register = {
            email: email,
            password: password,
            nickname: nickname,
            image: image
        }
        return await Requester.instance.request<typeof data, response.auth.register>(APIConfig.auth.register, data)
    }

    static async signIn(email: string, password: string): Promise<APIResponse<response.auth.signIn>> {
        const data: request.auth.signIn = {
            email: email,
            password: password
        }
        return await Requester.instance.request<typeof data, response.auth.signIn>(APIConfig.auth.signIn, data)
    }

    static async requestCode(email: string): Promise<APIResponse<response.auth.requestCode>> {
        const data: request.auth.requestCode = {
            email: email
        }
        return await Requester.instance.request<typeof data, response.auth.requestCode>(APIConfig.auth.requestCode, data)
    }

    static async requestCodeSubmit(code: string): Promise<APIResponse<response.auth.requestCodeSubmit>> {
        const data: request.auth.requestCodeSubmit = {
            code: code
        }
        return await Requester.instance.request<typeof data, response.auth.requestCodeSubmit>(APIConfig.auth.requestCodeSubmit, data)
    }

}
