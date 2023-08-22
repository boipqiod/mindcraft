export default class APIResponse<T> {
    statusCode: number
    message: string
    data?: T

    isSuccess: boolean
    isError: boolean
    isTokenExpired: boolean

    constructor(code: number, message: string, data?: T) {
        this.statusCode = code
        this.message = message
        this.data = data

        this.isSuccess = code === 200
        this.isError = code !== 200
        this.isTokenExpired = code === 401 || code === 403
    }
}


export namespace response {
    export namespace auth {
        export type signIn = {
            accessToken: string
            refreshToken: string
        }

        export type register = {
            id: number
            email: string
            nickname: string
            image: string
        }
        export type requestCode = {
            code: string
        }
        export type requestCodeSubmit = {
            isSuccessful: boolean
        }
    }
}
