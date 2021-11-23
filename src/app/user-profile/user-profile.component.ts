import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 defaultLibre ='Libre';
  enseignant : any[];
  enseignatPourTable : any[];
    jourPourTable : any[];
    seancePourTable : any[];
   


  constructor(private httpClient: HttpClient , private route :Router) { }
  ngOnInit() {
  }
OnSubmit(form: NgForm)
{
  this.httpClient.post('http://localhost:8085/ajouterEnseignant',form.value)
    .subscribe(
    (response: any[]) =>
{console.log(form.value);
    this.route.navigate(['table-list']);} ,
    (error ) => {console.log(error);
}
    );
}
    OnSubmit2(form : NgForm)
   {

     this.httpClient.post('http://localhost:8085/ajouterSalle',form.value)
         .subscribe(
             (response: any[]) =>
             {console.log(form.value);
                 this.route.navigate(['table-list']);} ,
             (error ) => {console.log(error);
             }
         );

   }

    OnSubmit3(form: NgForm) {
        const jour = form.value['jour'];
        const seance = form.value['seance'];
        const email = form.value['email'];
        this.httpClient.get<any []>('http://localhost:8085/sAuthentifier/'+email).subscribe((response: any[])=>
        {this.enseignatPourTable=response;


            },
            (error) =>{console.log(error);}
        );
        this.httpClient.get<any []>('http://localhost:8085/getSeance/'+seance).subscribe((response: any[])=>
            {this.seancePourTable=response;},
            (error) =>{console.log(error);}
        );
        this.httpClient.get<any []>('http://localhost:8085/getJour/'+jour).subscribe((response: any[])=>
            {this.jourPourTable=response;},
            (error) =>{console.log(error);}
        );
    


    this.httpClient.get('http://localhost:8085/ajouterTableAccee/'+this.jourPourTable[0].id+'/'+this.seancePourTable[0].id+'/'+this.enseignatPourTable[0].id)
.subscribe(
(response: any[]) =>
{
    this.route.navigate(['table-list']);} ,
(error ) => {console.log(error);
}
);

        
    }
}
