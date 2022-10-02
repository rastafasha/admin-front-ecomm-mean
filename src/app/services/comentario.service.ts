import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {environment} from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  public url;

  constructor(
    private _http : HttpClient
  )
  {
    this.url = environment.baseUrl;
  }

  registro(data):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url + '/comentarios/registro',data,{headers:headers})
  }

  listar():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url + '/comentarios',{headers:headers})
  }

  listar_last():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url + '/comentarios/last',{headers:headers})
  }

  get_data(id,orden):Observable<any>{


    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url + '/comentarios/comentarios_client/obtener/'+id+'/'+orden,{headers:headers})
  }

  add_likes(data):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url + '/comentarios/comentarios_likes/add',data,{headers:headers})
  }

  get_likes(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url + '/comentarios/comentarios_likes/get/'+id,{headers:headers})
  }

  add_dislikes(data):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url + '/comentarios/comentarios_dislikes/add',data,{headers:headers})
  }

  get_dislikes(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url + '/comentarios/comentarios_dislikes/get/'+id,{headers:headers})
  }
}
