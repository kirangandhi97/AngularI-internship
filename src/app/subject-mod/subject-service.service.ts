import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  UserName = new BehaviorSubject<string>('Hello!');  //behavior subject for initial value

  constructor() { }
}
