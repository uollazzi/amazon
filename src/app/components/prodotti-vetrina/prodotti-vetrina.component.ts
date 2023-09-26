import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/models/prodotto';
import { User } from 'src/app/models/user';
import { ProdottiService } from 'src/app/services/prodotti.service';

@Component({
  selector: 'app-prodotti-vetrina',
  templateUrl: './prodotti-vetrina.component.html',
  styleUrls: ['./prodotti-vetrina.component.css']
})
export class ProdottiVetrinaComponent implements OnInit {
  prodotti: Prodotto[] = [];

  constructor(private prodottiService: ProdottiService) {

  }

  ngOnInit(): void {
    this.prodotti = this.prodottiService.getAll();

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
