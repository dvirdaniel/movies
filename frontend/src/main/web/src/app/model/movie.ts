export class Movie {
  private _Title: string;
  private _Year: string;
  private _imdbID: string;
  private _Type: string;
  private _Poster: string;

  get Title(): string {
    return this._Title;
  }

  set Title(value: string) {
    this._Title = value;
  }

  get Year(): string {
    return this._Year;
  }

  set Year(value: string) {
    this._Year = value;
  }

  get imdbID(): string {
    return this._imdbID;
  }

  set imdbID(value: string) {
    this._imdbID = value;
  }

  get Type(): string {
    return this._Type;
  }

  set Type(value: string) {
    this._Type = value;
  }

  get Poster(): string {
    return this._Poster;
  }

  set Poster(value: string) {
    this._Poster = value;
  }
}
