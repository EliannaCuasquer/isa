import { Component, OnInit } from '@angular/core';
import { estModel } from 'src/app/models/est.model';
import { NgForm } from '@angular/forms';
import { ApisqrService } from 'src/app/services/apisqr.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-est',
  templateUrl: './est.component.html',
  styleUrls: ['./est.component.css']
})
export class EstComponent implements OnInit {
  
  est = new estModel();

  constructor(private aspisqr:ApisqrService) { }

  ngOnInit(): void {
  }
  guardar( form: NgForm ){
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
   
    this.aspisqr.crearEst(this.est)
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
