import {Movie} from "./movie";

export class SearchResult {
  private _Search: Array<Movie>;
  private _totalResults: number;
  private _Response: string;
  private _Error: string;
  private _fromDB: boolean;

  get Search(): Array<Movie> {
    return this._Search;
  }

  set Search(value: Array<Movie>) {
    this._Search = value;
  }

  get totalResults(): number {
    return this._totalResults;
  }

  set totalResults(value: number) {
    this._totalResults = value;
  }

  get Response(): string {
    return this._Response;
  }

  set Response(value: string) {
    this._Response = value;
  }

  get Error(): string {
    return this._Error;
  }

  set Error(value: string) {
    this._Error = value;
  }

  get fromDB(): boolean {
    return this._fromDB;
  }

  set fromDB(value: boolean) {
    this._fromDB = value;
  }
}
