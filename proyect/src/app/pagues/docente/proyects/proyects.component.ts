import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { proModel } from 'src/app/models/pro.model';
import { ApisqrService } from 'src/app/services/apisqr.service';
import { docModel } from 'src/app/models/doc.model';
import { prdocModel } from 'src/app/models/prdoc.model'
@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  proList$!:Observable<any[]>;
  docList$!:Observable<any[]>;
  pryDoc!:prdocModel;
  doc!:docModel;
  constructor(private apisqr:ApisqrService) { }

  ngOnInit(): void {
    this.proList$=this.apisqr.getProy();
    this.docList$ = this.apisqr.getdoc();
  }
  modProy(proy : proModel){
     this.pryDoc.Codproy=proy.codproy;
     this.pryDoc.Iddoc=this.doc.iddoc;
     this.apisqr.crearProyDoc(this.pryDoc)
     .subscribe( resp=>{
      console.log(resp);
     });
   }
   guardarId(iddoc:docModel){
      this.doc=iddoc;
      console.log(this.doc);
   }

}
