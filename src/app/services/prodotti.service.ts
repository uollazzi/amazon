import { Injectable } from '@angular/core';
import { Prodotto } from '../models/prodotto';
// import { PRODOTTI } from '../data/prodotti';
import { Observable, catchError, delay, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Dependency Injection
@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  private baseUrl = "https://fakestoreapi.com";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(`${this.baseUrl}/products`)
      .pipe(
        tap(() => console.log("Risposta ricevuta dal server")),
        delay(3000),
        tap(() => console.log("Sono passati 3 secondi dalla risposta ricevutra dal server")),
        delay(1000),
      )
    // .pipe(
    //   catchError(err => {
    //     console.log(err);
    //     return of([]);
    //   })
    // );
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/products/categories`);
  }

  getProductById(id: number): Observable<Prodotto> {
    return this.http.get<Prodotto>(`${this.baseUrl}/products/${id}`);
  }
}
