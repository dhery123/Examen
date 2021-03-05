import axios from 'axios';
class Request{
    constructor(method,uri,data, callback){
        this.callback=callback;
        this.params={
            method: method,
            uri: uri,
            data: data,
        };
    }

    start(){
        axios(this.params)
        .then((response)=>{
            this.callback(response);
        })
        .catch((error)=>{
            this.callback(error);
        });

    }
}
export default Request;