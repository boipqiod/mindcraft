export default class Logger {
    static log(...args: any[]) { if (this.isDebug()) console.log(...args) }
    static info(...args: any[]) { if (this.isDebug()) console.info(...args) }
    static warn(...args: any[]) { if (this.isDebug()) console.warn(...args) }
    static error(...args: any[]) { if (this.isDebug()) console.error(...args) }

    private static isDebug = ():boolean =>{
        return process.env.NODE_ENV === 'development'
    }

}
