import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from '../models/document';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';
import { Paiement } from '../models/paiement';
import { FactureDto } from '../models/factureDTO';
import { AuthentificationService } from './authentification.service';


@Injectable({
  providedIn: 'root',
})

export class DocumentService {
  
  httpHeaders() {
    let headers = new HttpHeaders();
    //headers = headers.set('Authorization','Bearer '+this.authService.accessToken)
    // headers = headers.set('X-API-KEY', 'X-TRANSFER-2022!');
    // headers = headers.set('Accept', 'application/json');
    // headers = headers.set('Content-Type', 'application/json');
  
    const httpOptions = {
      headers 
    };
    return httpOptions
  }
  private apiUrl = environment.apiUrl;

constructor(private http: HttpClient, private authService : AuthentificationService) {}

  getDocuments(): any {
    return this.http.get(this.apiUrl+"/documents/find");
  }

  getFacturesByStatut(statut : string): any {
   
    return this.http.get(this.apiUrl+"/documents/find/etat/"+statut, this.getHeaders());
  }

  getHeaders(){
    let options = {
      headers : new HttpHeaders().set("Authorization","Bearer "+this.authService.accessToken)
    }
    return options;
  }

  getFile(fileName : string): Observable<any> {
    return this.http.get(this.apiUrl+"/documents/"+fileName, this.getHeaders());
  }



  getFacturesByEtatNotIn(statuts: string[]): Observable<any> {
      let params = new HttpParams();
      statuts.forEach(statut => {
          params = params.append('etatsExclus', statut);
      });
      let options = {
          params: params,
          headers: new HttpHeaders({
              'Authorization': 'Bearer ' + this.authService.accessToken
          })
      };
      return this.http.get<any>(`${this.apiUrl}/documents/find/etat/not-in`, options);
  }

  getFacturesByEtatNotInAndByUser(statuts: string[], userId : number): Observable<any> {
    let params = new HttpParams();
    statuts.forEach(statut => {
        params = params.append('etatsExclus', statut);
    });
    let options = {
        params: params,
        headers: new HttpHeaders({
            'Authorization': 'Bearer ' + this.authService.accessToken
        })
    };
    return this.http.get<any>(`${this.apiUrl}/documents/find/etat/not-in/by-user/${userId}`, options);
}
  

  getUserFactures(userId : number){
    const url = `${this.apiUrl}/documents/userFactures/${userId}`;
    return this.http.get<any>(url, this.getHeaders());
  }

  addDocument(document: FactureDto): any {
    return this.http.post(this.apiUrl+"/documents/save", document, this.getHeaders());
  }

  addRecu(paiement: Paiement): any {
    return this.http.post(this.apiUrl+"/documents/saveRecu", paiement, this.getHeaders());
  }

  addPaiement(factureId: number, paiement : Paiement): any {
    return this.http.post(this.apiUrl+"/documents/addPayment?factureId="+factureId, paiement, this.getHeaders());
  }

  getPaiementsByFacture(factureId: number): Observable<any> {
    const url = `${this.apiUrl}/documents/find/paiements/${factureId}`;
    return this.http.get<any>(url, this.getHeaders());
  }

  getDocumentById(documentId: number): Observable<Document> {
    const url = `${this.apiUrl}/${documentId}`;
    return this.http.get<Document>(url, this.getHeaders());
  }

  getFichier(nomFichier:string){
    const url = `${this.apiUrl}/documents/fichier/${nomFichier}`;
    return this.http.get<any>(url, this.getHeaders());
  }



  updateEtatFacture(id: number, nouvelEtat : string): any {
    return this.http.get(this.apiUrl + "/documents/" + id+"/etat/"+ nouvelEtat, this.getHeaders());
}


updateDocument(document: Document): Observable<Document> {
    const url = `${this.apiUrl}/${document.id}`;
    return this.http.put<Document>(url, document, this.getHeaders());
}

  deleteDocument(documentId: number): Observable<void> {
    const url = `${this.apiUrl}/${documentId}`;
    return this.http.delete<void>(url, this.getHeaders());
  }
}
