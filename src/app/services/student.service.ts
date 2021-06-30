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
  getByIdStudents(studentIndex: number) {
    throw new Error('Method not implemented.');
  }
  studentArr : Students[]=[];

  url:string = 'http://localhost:3000/Student';
  constructor(private httpclient:HttpClient) { }
 
  getAllstudent(): Observable<Students[]> {
    console.log(Students);
    return this.httpclient.get<Students[]>("http://localhost:3000/Student");
    
  }

  removeStudent(id:number): Observable<number>{
    return this.httpclient.delete<number>(this.url + '/' + id, httpheader);
  }

  addStudent(student:Students): Observable<Students>{                                  //expecting data to return as product 
  const studentUrl = 'http://localhost:3000/Student';
  return this.httpclient.post<Students>(this.url, student, httpheader);         
            //return an observable
  }

  public updatestudent(student: Students):Observable<Students>{
   return this.httpclient.put<Students>(`${this.url}student/${student.id}`,student) // edit
  }

  getStudentById(id: any): Observable<Students> {       //get by id
    return this.httpclient.get<Students>(`${this.url}student/${id}`);
  }
}
