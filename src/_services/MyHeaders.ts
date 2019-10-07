export default class MyHeaders{
    private static _myHeaders : MyHeaders;
    private headers:Headers;

    private constructor(){
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json")
    }

    public static getMyHeaders(): Headers{
        if(this._myHeaders === null || this._myHeaders === undefined){
            this._myHeaders = new MyHeaders();
        }
            return this._myHeaders.headers;
    }

    public static addHeader(name:string, value:string) : MyHeaders{
        this._myHeaders.headers.append(name, value);
        return this._myHeaders
    }

    public static resetMyHeaders(){
        this._myHeaders = new MyHeaders()
    }
}
