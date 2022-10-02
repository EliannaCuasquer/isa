import { Component, OnInit } from '@angular/core';
import { ApisqrService } from 'src/app/services/apisqr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  id:number=0;
  password: string | undefined;
  item:any;
  constructor(private apisqr:ApisqrService) { }

  ngOnInit(): void {
  }
  login(){
   this.item = this.apisqr.getAdminU(this.id).subscribe();
   console.log(this.item);
   if(this.password==this.item.paswest){
    console.log(this.item);
   }else{
    console.log("contraseña no valido");
   }
   
  }

}
