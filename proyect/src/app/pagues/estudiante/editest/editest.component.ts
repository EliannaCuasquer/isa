import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { estModel } from 'src/app/models/est.model';
import { ApisqrService } from 'src/app/services/apisqr.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editest',
  templateUrl: './editest.component.html',
  styleUrls: ['./editest.component.css']
})
export class EditestComponent implements OnInit {
  
  est = new estModel();

  constructor(private apisqr:ApisqrService,
              private rout: ActivatedRoute) { }

  ngOnInit(): void {

    const id:any =  this.rout.snapshot.paramMap.get('id');
    this.apisqr.getEstU( id )
    .subscribe( resp => {
      console.log(resp);
    }); 

  }

  guardar(form: NgForm){
    if(form.invalid){
      Swal.fire({
        title: 'Error!',
        text: 'Por favor rellene todos las caja de texto',
        icon: 'error',
        confirmButtonText: 'Continuar'
      });
      console.log('Formulario no válido');
      return;
    }
    this.apisqr.putEst(this.est.idest,this.est)
    .subscribe( resp => {
      console.log(resp);
    });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Estudiante Registrado',
      showConfirmButton: false,
      timer: 1500
    });
  }
  

}
