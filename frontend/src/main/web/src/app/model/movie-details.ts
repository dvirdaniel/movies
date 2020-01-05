import {Movie} from "./movie";

export class MovieDetails extends Movie {

  private _Rated: string;
  private _Released: string;
  private _Runtime: string;
  private _Genre: string;
  private _Director: string;
  private _Writer: string;
  private _Actors: string;
  private _Plot: string;
  private _Language: string;
  private _Country: string;
  private _Awards: string;
  private _Metascore: string;
  private _imdbRating: string;
  private _imdbVotes: string;
  private _DVD: string;
  private _BoxOffice: string;
  private _Production: string;
  private _Website: string;
  private _Response: string;

  get Rated(): string {
    return this._Rated;
  }

  set Rated(value: string) {
    this._Rated = value;
  }

  get Released(): string {
    return this._Released;
  }

  set Released(value: string) {
    this._Released = value;
  }

  get Runtime(): string {
    return this._Runtime;
  }

  set Runtime(value: string) {
    this._Runtime = value;
  }

  get Genre(): string {
    return this._Genre;
  }

  set Genre(value: string) {
    this._Genre = value;
  }

  get Director(): string {
    return this._Director;
  }

  set Director(value: string) {
    this._Director = value;
  }

  get Writer(): string {
    return this._Writer;
  }

  set Writer(value: string) {
    this._Writer = value;
  }

  get Actors(): string {
    return this._Actors;
  }

  set Actors(value: string) {
    this._Actors = value;
  }

  get Plot(): string {
    return this._Plot;
  }

  set Plot(value: string) {
    this._Plot = value;
  }

  get Language(): string {
    return this._Language;
  }

  set Language(value: string) {
    this._Language = value;
  }

  get Country(): string {
    return this._Country;
  }

  set Country(value: string) {
    this._Country = value;
  }

  get Awards(): string {
    return this._Awards;
  }

  set Awards(value: string) {
    this._Awards = value;
  }

  get Metascore(): string {
    return this._Metascore;
  }

  set Metascore(value: string) {
    this._Metascore = value;
  }

  get imdbRating(): string {
    return this._imdbRating;
  }

  set imdbRating(value: string) {
    this._imdbRating = value;
  }

  get imdbVotes(): string {
    return this._imdbVotes;
  }

  set imdbVotes(value: string) {
    this._imdbVotes = value;
  }

  get DVD(): string {
    return this._DVD;
  }

  set DVD(value: string) {
    this._DVD = value;
  }

  get BoxOffice(): string {
    return this._BoxOffice;
  }

  set BoxOffice(value: string) {
    this._BoxOffice = value;
  }

  get Production(): string {
    return this._Production;
  }

  set Production(value: string) {
    this._Production = value;
  }

  get Website(): string {
    return this._Website;
  }

  set Website(value: string) {
    this._Website = value;
  }

  get Response(): string {
    return this._Response;
  }

  set Response(value: string) {
    this._Response = value;
  }
}
