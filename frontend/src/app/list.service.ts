import {ListData} from "./data-model";
import {Injectable} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ListService{
  constructor(public http:HttpClientModule) {

  }

  getLists(): Observable<string[]>{
    return of(ListData);
  }
}
