import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { adminModel } from 'src/app/models/admi.model';
import { ApisqrService } from 'src/app/services/apisqr.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  admin = new adminModel();

  constructor(private apisqr:ApisqrService,
              private rout: ActivatedRoute) { }

  ngOnInit(): void {
    const id:any = this.rout.snapshot.paramMap.get(' id ');
    this.apisqr.getAdminU(id)
    .subscribe( resp => {
      console.log(resp);
    });
  }

  guardar( form: NgForm){
    if (form.invalid){
      Swal.fire({
        title: 'Error!',
        text: 'Por favor rellene todos las caja de texto',
        icon: 'error',
        confirmButtonText: 'Continuar'
      });
      console.log('Formulario no válido');
      return;
    }
    this.apisqr.putAdmin(this.admin.idadmin,this.admin)
    .subscribe( resp =>{
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
