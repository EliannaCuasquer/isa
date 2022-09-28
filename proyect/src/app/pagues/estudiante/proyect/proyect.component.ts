import { Component, OnInit } from '@angular/core';
import { proModel} from 'src/app/models/pro.model';
import { NgForm } from '@angular/forms';
import { ApisqrService } from 'src/app/services/apisqr.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {
  
  proy = new proModel();

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

    this.proy.codproy=parseInt(''+ Math.random() * (150 - 1) + 1 );
    this.proy.idadmin=111;
    console.log(this.proy);
    this.aspisqr.crearProy(this.proy)
      .subscribe( resp => {
        console.log(resp);
      });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Proyecto Registrado',
        showConfirmButton: false,
        timer: 1500
      });  
  }

}
