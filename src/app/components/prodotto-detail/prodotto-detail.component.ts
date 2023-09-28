import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prodotto, ProdottoACarrello } from 'src/app/models/prodotto';
import { CarrelloService } from 'src/app/services/carrello.service';
import { ProdottiService } from 'src/app/services/prodotti.service';

@Component({
  selector: 'app-prodotto-detail',
  templateUrl: './prodotto-detail.component.html',
  styleUrls: ['./prodotto-detail.component.css']
})
export class ProdottoDetailComponent implements OnInit {
  prodotto?: Prodotto;

  constructor(
    private route: ActivatedRoute,
    private prodottiService: ProdottiService,
    private carrelloService: CarrelloService
  ) {

  }

  ngOnInit(): void {
    // http://localhost:4200/prodotti/2 <== cerchiamo di recuperare il "2"
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.prodottiService.getProductById(id).subscribe(dati => {
      this.prodotto = dati;
    });
  }

  // TODO: Creare un componente per l'aggiunta a carrello
  aggiungiACarrello() {
    let p: ProdottoACarrello = {
      id: this.prodotto!.id,
      title: this.prodotto!.title,
      price: this.prodotto!.price,
      qta: 1
    }

    this.carrelloService.aggiungi(p);
  }
}
