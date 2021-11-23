import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmpreinteService} from '../services/empreinte.service';
import {Router} from '@angular/router';
import {RetourByIdService} from '../services/retourById.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
    isEtape1=true;
  listEnseignant:any[];
  listSalle:any[];
  listTableAccee:any[];
  jour:any;
    seance:any;
    enseignant:any;

  constructor(private httpClient :HttpClient ,private empreinteService :EmpreinteService,private route :Router,private retourById :RetourByIdService) { }

  ngOnInit() {
    this.httpClient.get<any []>('http://localhost:8085/allEnseignant').subscribe((response: any[])=>
    {this.listEnseignant = response;
    },
    (error) =>{console.log(error);}
  );
      this.httpClient.get<any []>('http://localhost:8085/allSalle').subscribe((response: any[])=>
          {this.listSalle = response;
          },
          (error) =>{console.log(error);}
      );
      this.httpClient.get<any []>('http://localhost:8085/allTableAccee').subscribe((response: any[])=>
          {this.listTableAccee = response;
          },
          (error) =>{console.log(error);}
      );

  }
  OnSubmitEmprenite(idEnseignant :any)
  {
      this.empreinteService.intiEmpreinte(idEnseignant);
  console.log(this.empreinteService.idEmpreinte);
  this.route.navigate(['notifications']);}
    OnDeleteEnseignant(idEnseignant :number)
    {
        this.httpClient.get<any []>('http://localhost:8085/deleteEnseingant/'+idEnseignant).subscribe((response: any[])=>
            {this.listEnseignant = response;
            },
            (error) =>{console.log(error);}
        );
    }
    getJour(idTableacees: number)
    {this.retourById.ReturnJourById(idTableacees);
    this.jour=this.retourById.Jour;}

    getSeance(idTableacees: number)
    {this.retourById.ReturnSeanceById(idTableacees);
        this.seance=this.retourById.Seance;}

    getEnseignant(idTableacees: number)
{this.httpClient.get<any >('http://localhost:8085/tableAccees/'+idTableacees+'/enseignant').subscribe((response: any)=>
    {this.enseignant = response;

    },
    (error) =>{console.log(error);}
);}


    OnDeleteSalle(idSalle: number) {
        this.httpClient.get<any []>('http://localhost:8085/deleteSalle/'+idSalle).subscribe((response: any[])=>
            {this.listSalle = response;
            },
            (error) =>{console.log(error);}
        );

    }

    OnDeleteTableAcces(idTable: number) {
        this.httpClient.get<any []>('http://localhost:8085/deleteTableAccee/'+idTable).subscribe((response: any[])=>
            {this.listTableAccee = response;
            },
            (error) =>{console.log(error);}
        );

    }
}
