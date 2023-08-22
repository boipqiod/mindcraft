export class FromUtil {
    static get instance(): FromUtil {
        if (!FromUtil._instance) {
            FromUtil._instance = new FromUtil();
        }
        return FromUtil._instance;
    }
    private static _instance: FromUtil;

    private constructor() {
    }

    checkEmail(email: string): boolean {
        const emailRegExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        return emailRegExp.test(email);
    }
    checkPassword(password: string): boolean {
        const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegExp.test(password);
    }
    checkNickname(nickname: string): boolean {
        // 길이 체크 (2~10자)
        if (nickname.length < 2 || nickname.length > 10) return false;
        // 숫자만 있는지 체크
        else if (/^\d+$/.test(nickname)) return false;
        // 한글, 영문 대소문자, 숫자 외의 문자가 있는지 체크
        else if (/[^가-힣a-zA-Z0-9]/.test(nickname)) return false;

        return true;
    }

    checkNumber(number: string): boolean {
        const numberRegExp = /^[0-9]*$/;
        return numberRegExp.test(number);
    }
}
