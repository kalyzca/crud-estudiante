import { Injectable } from '@angular/core';
import { Firestore, collection,  addDoc,collectionData, doc, deleteDoc } from '@angular/fire/firestore';

import { Student } from '../interfaces/student';
import { Observable, Subject  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class StudentService {
 
  // private student = new Subject<any>();

  constructor(private firestore: Firestore) {
   this.getStudents()
  }

  addStudent(student: Student) {
    const studentRef = collection(this.firestore, 'students');
    return addDoc(studentRef, student);
  }

  getStudents(): Observable<Student[]> {
    const studentRef = collection(this.firestore, 'students');
    return collectionData(studentRef, { idField: 'id' }) as Observable<Student[]>;
  }

  deleteStudent(student: Student){
    const studentDocRef = doc(this.firestore, `students/${student.id}`)
    return deleteDoc(studentDocRef)
  }

  
}

