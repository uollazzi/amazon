import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/models/prodotto';
import { User } from 'src/app/models/user';
import { ProdottiService } from 'src/app/services/prodotti.service';
import { Colore } from 'src/app/models/enums';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-prodotti-vetrina',
  templateUrl: './prodotti-vetrina.component.html',
  styleUrls: ['./prodotti-vetrina.component.css']
})
export class ProdottiVetrinaComponent implements OnInit {
  prodotti: Prodotto[] = [];

  errorMessage = "";

  Colore = Colore;

  constructor(private prodottiService: ProdottiService) {

  }

  ngOnInit(): void {
    this.prodottiService.getProducts()
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.message;
          return of([]);
        })
      )
      .subscribe(dati => {
        console.log("Nuovi dati ricevuti");
        this.prodotti = dati;
      });

    // this.prodotti = this.prodottiService.getAll();

    // console.log("INIZIO");

    // try {
    //   let mario = new User("Mario", "Rossi");
    //   console.log(mario.nomeCompleto);

    //   mario.eta = 879; // TODO: user input
    //   console.log(mario.eta);
    // } catch (error) {
    //   console.log(error);
    // }

    // console.log("FINE");

  }
}
