import { Component, OnInit } from '@angular/core';
import { Student } from "../../interfaces/student";
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from "../../services/student.service";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
  formStudent: FormGroup;
  listStudents: Student[] = [];
  
  constructor(private studentService:StudentService) {
    this.formStudent = new FormGroup({
      names: new FormControl(),
      lastnames: new FormControl(),
      dateOfBirth: new FormControl(),
      dni: new FormControl(),
      phone:  new FormControl(),
      
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.studentService.addStudent(this.formStudent.value);
    console.log(this.formStudent.value)
    console.log(response);
  }
}
