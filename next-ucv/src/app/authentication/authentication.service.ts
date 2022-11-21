import { Injectable } from '@angular/core';
import { candidatos } from '../models/candidato';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ResponseDTO } from '../models/responseApi';
import { environment } from 'src/environments/environment';
import { usuarios } from '../models/usuario';
import { loginRequestDTO } from '../models/login';
import { empresas } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) { }

  insertCandidato(candidatoObj: candidatos): Observable<ResponseDTO> {
    //console.log("obj", candidatoObj)
    return this.httpClient
    .post<ResponseDTO>(`${environment.apiURL}candidatos/`, candidatoObj)
    .pipe(
      map((response) => {       
        return response;
      })
    );
  }
  insertusuario(usuarioObj: usuarios): Observable<ResponseDTO> {
    return this.httpClient
    .post<ResponseDTO>(`${environment.apiURL}usuarios/`, usuarioObj)
    .pipe(
      map((response) => {       
        return response;
      })
    );
  }
  Loginusuario(loginReq: loginRequestDTO): Observable<ResponseDTO> {
    return this.httpClient
    .post<ResponseDTO>(`${environment.apiURL}login/access/`, loginReq)
    .pipe(
      map((response) => {       
        return response;
      })
    );
  }
  getParametersByIdGroup(id: number): Observable<ResponseDTO> {
    return this.httpClient
    .get<ResponseDTO>(`${environment.apiURL}parametro/getParametersByIdGroup/`+id)
    .pipe(
      map((response) => {       
        return response;
      })
    );
  }
  insertEmpresa(empresaObj: empresas): Observable<ResponseDTO> {
    return this.httpClient
    .post<ResponseDTO>(`${environment.apiURL}empresas/`, empresaObj)
    .pipe(
      map((response) => {       
        return response;
      })
    );
  }
}
