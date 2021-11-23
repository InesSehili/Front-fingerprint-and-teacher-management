import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
@Injectable()
export class EmpreinteService {
    constructor(private httpClient: HttpClient) { }

 idEmpreinte:any;
intiEmpreinte(idEm:any)
{this.idEmpreinte=idEm;}

}
