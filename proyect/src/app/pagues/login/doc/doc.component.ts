import { Component, OnInit } from '@angular/core';
import { docModel } from 'src/app/models/doc.model';
import { NgForm } from '@angular/forms';
import { ApisqrService } from 'src/app/services/apisqr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {
  
  doc = new docModel();

  constructor(private apisqr:ApisqrService) { }

  ngOnInit(): void {
  }
  guardar( form: NgForm ){
    if( form.invalid){
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
      title: 'Docente Registrado',
      showConfirmButton: false,
      timer: 1500
    });
    this.apisqr.crearDoc(this.doc)
      .subscribe( resp=>{
        console.log(resp);
      });
  }
}
