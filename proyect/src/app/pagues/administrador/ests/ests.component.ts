import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { estModel } from 'src/app/models/est.model';
import { ApisqrService } from 'src/app/services/apisqr.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ests',
  templateUrl: './ests.component.html',
  styleUrls: ['./ests.component.css']
})
export class EstsComponent implements OnInit {
  
  estList$!:Observable<any[]>;
  id='';
  constructor(private apisqr:ApisqrService) { }

  ngOnInit(): void {
    this.estList$=this.apisqr.getEst();
  }
  deleteEst(est: estModel, i : number){
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
          'El estudiante ha sido eliminado.',
          'success'
          
        )
        this.apisqr.deleteEst(est.idest).subscribe();
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'El estudiante no a sido eliminado',
          'error'
        )
      }
    });
  }
  

}
