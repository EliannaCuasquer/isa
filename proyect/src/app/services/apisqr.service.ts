import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { adminModel } from '../models/admi.model';
import { docModel } from '../models/doc.model';
import { estModel } from '../models/est.model';
import { proModel }from '../models/pro.model';
import { prdocModel } from '../models/prdoc.model';

@Injectable({
  providedIn: 'root'
})
export class ApisqrService {
  
  readonly url="https://localhost:7203";

  constructor(private htttp: HttpClient) { }

  crearAdmin(admin: adminModel){

    return this.htttp.post(this.url+'/Admin',admin);  

  }
  crearDoc(doc:docModel){

    return this.htttp.post(this.url+'/Docente',doc);  

  }
  crearEst(est:estModel){

    return this.htttp.post(this.url+'/Estudiante',est);  

  }
  crearProy(pro:proModel){

    return this.htttp.post(this.url+'/Proyecto',pro);  

  }
  crearProyDoc(pd:prdocModel){

    return this.htttp.post(this.url+'/ProyDoc',pd);  

  }

  putAdmin(id:number, admin: adminModel){
    return this.htttp.put(this.url+'/Admin/'+id,admin);
  }
  putDoc(id:number,doc:docModel){
    return this.htttp.put(this.url+'/Docente/'+id,doc);
  }
  putEst(id:number,est:estModel){
    return this.htttp.put(this.url+'/Estudiante/'+id,est);
  }
  putProy(id:number,pro:proModel){
    return this.htttp.put(this.url+'/Proyecto/'+id,pro);
  }
  putProyDoc(id:number,pd:prdocModel){
    return this.htttp.put(this.url+'/ProyDoc/'+id,pd);
  }

  getEstU(id : number){
    return this.htttp.get(this.url+'/Estudiante/'+id);
  }
  getDocU(id: number){
    return this.htttp.get(this.url+'/Docente/'+id);
  }
  getAdminU(id: number){
    return this.htttp.get(this.url+'/Admin/'+id);
  }
  getProyU(id: number){
    return this.htttp.get(this.url+'/Proyecto/'+id);
  }
  getProDocyU(id: number){
    return this.htttp.get(this.url+'/ProyDoc/'+id);
  }

  getAdmin(){
    return this.htttp.get<any>(this.url+'/Admin');
  }
  getdoc(){
    return this.htttp.get<any>(this.url+'/Docente');
  }
  getEst(){
    return this.htttp.get<any>(this.url+'/Estudiante');
  }
  getProy(){
    return this.htttp.get<any>(this.url+'/Proyecto');
  }
  getProyDoc(){
    return this.htttp.get<any>(this.url+'/ProyDoc');
  }
  
  deleteAdmin(id : number){
    return this.htttp.delete(this.url+'/Admin/'+id);
  }
  deleteDoc(id : number){
    return this.htttp.delete(this.url+'/Docente/'+id);
  }
  deleteEst(id : number){
    return this.htttp.delete(this.url+'/Estudiante/'+id);
  }
  deleteProy(id : number){
    return this.htttp.delete(this.url+'/Proyecto/'+id);
  }
  deleteProyDoc(id : number){
    return this.htttp.delete(this.url+'/ProyDoc/'+id);
  }
}
