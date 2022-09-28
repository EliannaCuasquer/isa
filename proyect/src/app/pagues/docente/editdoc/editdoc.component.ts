import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { docModel } from 'src/app/models/doc.model';
import { ApisqrService } from 'src/app/services/apisqr.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editdoc',
  templateUrl: './editdoc.component.html',
  styleUrls: ['./editdoc.component.css']
})
export class EditdocComponent implements OnInit {
  
  doc = new docModel();
  docList!:any;
  constructor(private apisqr:ApisqrService,
              private rout: ActivatedRoute) { }

  ngOnInit(): void {
    const id:any = this.rout.snapshot.paramMap.get(' id ');
    this.apisqr.getDocU( id )
    .subscribe( resp => {
      this.docList=resp;
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
    this.apisqr.putDoc(this.doc.iddoc,this.doc)
    .subscribe(resp => {
      console.log(resp);
    });
  }
   deleteDoc(doc : docModel){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'SI, Eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          '¡Eliminado!',
          'El Docente ha sido eliminado.',
          'success'
          
        )
        this.apisqr.deleteDoc(doc.iddoc).subscribe();
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'El Docente no a sido eliminado',
          'error'
        )
      }
    });
    
  }


}
