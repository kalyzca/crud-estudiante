import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})
export class ListStudentsComponent implements OnInit {
  
  students :Student[];

  constructor(private studentService: StudentService) { 
    this.students = [];
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(students =>{
      this.students = students;
      console.log(students);
    } )
  }

 async studentDelete(student:Student) {
    const response = await this.studentService.deleteStudent(student);
    console.log(response);
  }
}
