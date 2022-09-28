import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { docModel } from 'src/app/models/doc.model';
import { ApisqrService } from 'src/app/services/apisqr.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  
  docList$!:Observable<any[]>;
  id='';
  constructor(private apisqr:ApisqrService) { }

  ngOnInit(): void{
    this.docList$ = this.apisqr.getdoc();
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
