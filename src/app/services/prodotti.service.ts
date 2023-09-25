import { Injectable } from '@angular/core';
import { Prodotto } from '../models/prodotto';
import { PRODOTTI } from '../data/prodotti';

// Dependency Injection
@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  constructor() { }

  getAll(): Prodotto[] {
    return PRODOTTI;
  }
}
