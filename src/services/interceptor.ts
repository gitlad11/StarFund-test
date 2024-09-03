import 'axios';
import axios, { AxiosResponse } from 'axios';

///Для работы с серверной частью 
export default class Interceptor {
    constructor() {}
    initialUrl: string = 'https://jsonplaceholder.org/posts';
    //создает настраиваемый axios
    http = axios.create();

    async getData(path : string){
        var response : AxiosResponse = await this.http.get(this.initialUrl + path)
        return response;
    }

    async postData(path : string){
        var response : AxiosResponse = await this.http.post(this.initialUrl + path)
        return response;
    }
     
    async putData(path : string){
        var response : AxiosResponse = await this.http.put(this.initialUrl + path)
        return response;
    }

    async deleteData(path : string){
        var response : AxiosResponse = await this.http.delete(this.initialUrl + path)
        return response;
    }
  }


   