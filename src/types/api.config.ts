export enum httpMethod {
    get = "get",
    post = "post",
    put = "put",
    delete = "delete"
}

export type ApiConfig = {
    method: httpMethod,
    url: string
    contentType?: httpContentType
}

export enum httpContentType {
    json = "application/json",
    form = "multipart/form-data"
}


export namespace APIConfig {
    export namespace auth {
        export const signIn: ApiConfig = {
            method: httpMethod.post,
            url: "/auth/sign-in"
        }
        export const register: ApiConfig = {
            method: httpMethod.post,
            url: "/auth/register",
            contentType: httpContentType.form
        }
        export const requestCode: ApiConfig = {
            method: httpMethod.post,
            url: "/auth/request-code"
        }
        export const requestCodeSubmit: ApiConfig = {
            method: httpMethod.post,
            url: "/auth/request-code-submit"
        }
    }
    export namespace test {
        export const getTestList: ApiConfig = {
            method: httpMethod.get,
            url: "/mindTestes"
        }
        export const getTestDetail: ApiConfig = {
            method: httpMethod.get,
            url: "/mindTestes/:id"
        }
        export const createTest: ApiConfig = {
            method: httpMethod.post,
            url: "/mindTest"
        }
    }
}
