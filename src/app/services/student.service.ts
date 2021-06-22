import { Injectable } from '@angular/core';
import { Students } from '../Models/student-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

const httpheader = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentArr : Students[]=[];

  url:string = 'http://localhost:3000/Student';
  constructor(private httpclient:HttpClient) { }
 
  getAllstudent(): Observable<Students[]> {
    console.log(Students);
    return this.httpclient.get<Students[]>("http://localhost:3000/Student");
    
  }

  removeStudent(id:string): Observable<Students>{
    return this.httpclient.delete<Students>(this.url + '/' + id, httpheader);
  }

  addStudent(student:Students): Observable<Students>{                                  //expecting data to return as product 
  const studentUrl = 'http://localhost:3000/Student';
  return this.httpclient.post<Students>(this.url, student, httpheader);         
            //return an observable
  }

  updatestudent(student: Students): Observable<Students> {
    debugger
    return this.httpclient.put<Students>(this.url + '/' + student.id, student, httpheader);
  }

  getStudentById(id: string): Observable<Students> {       
    return this.httpclient.get<Students>(this.url + '/' + id);
  }

}
