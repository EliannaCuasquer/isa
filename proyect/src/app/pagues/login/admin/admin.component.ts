import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { adminModel } from 'src/app/models/admi.model';
import { ApisqrService } from 'src/app/services/apisqr.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  admin = new adminModel();

  constructor(private apisqr:ApisqrService) { }

  ngOnInit(): void {
  }
  guardar( form: NgForm ){
    
    if( form.invalid ){
      Swal.fire({
        title: 'Error!',
        text: 'Por favor rellene todos las caja de texto',
        icon: 'error',
        confirmButtonText: 'Continuar'
      });
      console.log('Formulario no válido');
      return;
    }
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Administrativo Registrado',
      showConfirmButton: false,
      timer: 1500
    });
    this.apisqr.crearAdmin(this.admin)
     .subscribe( resp =>{
      console.log(resp);
     });

  }

}
