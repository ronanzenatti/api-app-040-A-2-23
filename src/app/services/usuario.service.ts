import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public listaUsuarios: Usuario[] = [];
  private url = 'http://localhost:3000/usuarios';

  // Criar uma instância do HttpClient
  constructor(private http: HttpClient) { }

  //AQUI VAI OS MÉTODOS DO CRUD

  // O Read é sempre composto por 2 métodos:

  // 1º Traz todos os registros do banco de dados
  public getAll(){
    // Retorna o resultado da conexão com a URL da API
    return this.http.get(this.url);
  }

  // 2º trás os dados de apenas 1 registro
  public getOne(id: number){
    return this.http.get(`${this.url}/${id}`);
  }
}
