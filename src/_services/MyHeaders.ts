
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

    public static add(name:string, value:string) : void{
        MyHeaders.getMyHeaders().append(name, value);
    }

    public  static  delete(name:string){
        MyHeaders.getMyHeaders().delete(name);
    }

    public static resetMyHeaders(){
        this._myHeaders = new MyHeaders()
    }
}
