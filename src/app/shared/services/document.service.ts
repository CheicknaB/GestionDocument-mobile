import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from '../models/document';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';
import { Paiement } from '../models/paiement';


@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private apiUrl = environment.apiUrl;

constructor(private http: HttpClient) {}

  getDocuments(): any {
    return this.http.get(this.apiUrl+"/documents/find");
  }

  getFacturesByStatut(statut : string): any {
    return this.http.get(this.apiUrl+"/documents/find/etat/"+statut);
  }

  getFacturesByEtatNotIn(statuts: string[]): Observable<any> {
    let params = new HttpParams();
    statuts.forEach(statut => {
      params = params.append('etatsExclus', statut);
    });
    return this.http.get<any>(`${this.apiUrl}/documents/find/etat/not-in`, { params: params });
  }

  addDocument(document: Document): any {
    return this.http.post(this.apiUrl+"/documents/save", document);
  }

  addPaiement(factureId: number, paiement : Paiement): any {
    return this.http.post(this.apiUrl+"/documents/addPayment?factureId="+factureId, paiement);
  }

  getPaiementsByFacture(factureId: number): Observable<any> {
    const url = `${this.apiUrl}/documents/find/paiements/${factureId}`;
    return this.http.get<any>(url);
  }

  getDocumentById(documentId: number): Observable<Document> {
    const url = `${this.apiUrl}/${documentId}`;
    return this.http.get<Document>(url);
  }



  updateEtatFacture(id: number, nouvelEtat : string): any {
    return this.http.get(this.apiUrl + "/documents/" + id+"/etat/"+ nouvelEtat);
}


updateDocument(document: Document): Observable<Document> {
    const url = `${this.apiUrl}/${document.id}`;
    return this.http.put<Document>(url, document);
}

  deleteDocument(documentId: number): Observable<void> {
    const url = `${this.apiUrl}/${documentId}`;
    return this.http.delete<void>(url);
  }
}
