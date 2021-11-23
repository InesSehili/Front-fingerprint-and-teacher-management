import {Component, Input, OnInit} from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {EmpreinteService} from '../services/empreinte.service';
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
    idEmpreinte:any;
  Enseignant:any;
  idRecuperer:any;
  etape:string;
  isidEmpreinte: boolean ;
  isnotidEmpreinte:boolean;

  constructor(private httpClient :HttpClient ,private empreinteService :EmpreinteService ) { }
  showEtape1(){

this.etape = 'etape1';
    this.httpClient.get<any>('http://localhost:8085/enregisterEmpreinte/'+this.empreinteService.idEmpreinte).subscribe((response: any)=>
        { },
        (error) =>{console.log(error);}
    );
  }
  showEtape2(){
      this.etape = 'etape2';

  }
  showEtape3(){
      this.etape = 'etape3';
      const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');


          this.httpClient.get<any>('http://localhost:8085/SetEmpreinte/'+this.idEmpreinte+'/Enregistrer').subscribe((response: any)=>
              {console.log('ok');
              },
              (error) =>{console.log(error);}
          );
    /*this.httpClient.get<any>('http://localhost:8085/recupererIdEmpreinte',{headers,responseType:'text' as 'json'}).subscribe((response: number)=>
        {this.idRecuperer = response;
        if(this.idRecuperer==this.empreinteService.idEmpreinte)
        {this.isidEmpreinte=true;}
        else{this.isidEmpreinte=false;}
        },
        (error) =>{console.log(error);}
    );*/
    
  }
  ngOnInit() {
      this.idEmpreinte=this.empreinteService.idEmpreinte;
    this.httpClient.get<any>('http://localhost:8085/getEnseignant/'+this.idEmpreinte).subscribe((response: any)=>
        {this.Enseignant = response;
        },
        (error) =>{console.log(error);}
    );
  }

}
