import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
@Injectable()
export class RetourByIdService {
    Enseignant :any;
    Jour :any;
    Seance:any;
    constructor(private httpClient: HttpClient) { }

ReturnEnseignantById(idTablesAccee: number)
{ this.httpClient.get<any >('http://localhost:8085/tablesAccee/'+idTablesAccee+'/enseignant').subscribe((response: any)=>
    {this.Enseignant = response;

    },
    (error) =>{console.log(error);}
);


}
    ReturnSeanceById(idTablesAccee: number)
    { this.httpClient.get<any>('http://localhost:8085/tableAccees/'+idTablesAccee+'/seance').subscribe((response: any)=>
        {this.Seance = response;

        },
        (error) =>{console.log(error);}
    );


    }
    ReturnJourById(idTablesAccee: number)
    { this.httpClient.get<any>('http://localhost:8085/tableAccees/'+idTablesAccee+'/jour').subscribe((response: any)=>
        {this.Jour = response;

        },
        (error) =>{console.log(error);}
    );


    }


}
