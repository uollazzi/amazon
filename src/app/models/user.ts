export class User {
  private _eta: number = 0;
  private _nome: string;
  private _cognome: string;

  private specie = "Essere Umano";

  constructor(nome: string, cognome: string) {
    this._nome = nome;
    this._cognome = cognome;
  }

  public get nomeCompleto(): string {
    return this._cognome.toUpperCase() + " " + this._nome;
  }

  public get eta() {
    return this._eta;
  }

  public set eta(e: number) {
    if (e < 0 || e >= 150) {
      throw new Error("Età incompatibile col genere umano");
    }

    this._eta = e;
  }
}


