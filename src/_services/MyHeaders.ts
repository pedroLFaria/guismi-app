
export default class MyHeaders{
    private static _myHeaders : MyHeaders;
    public headers:Headers;

    private constructor(){
        this.headers = new Headers;
    }

    public getMyHeaders(): MyHeaders{
        if(this._myHeaders === null || this._myHeaders === undefined){
            this._myHeaders = new MyHeaders();
        }
            return this._myHeaders;
    }

}