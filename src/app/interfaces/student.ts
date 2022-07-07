export interface Student {
  id: String;
  names: String;
  lastnames: String;
  dni: number;
  dateOfBirth:Date;
  phone: String;
  

}

// export class Student implements Student {
  
//   constructor(public names: String,lastnames:String,dateOfBirth:Date,dni:number,phone:String) {
//     this.names = names;
//     this.lastnames = lastnames;
//     this.dateOfBirth = dateOfBirth;
//     this.dni = dni;
//     this.phone = phone;
//     this.creationDate = new Date(Date.now());
//     this.updateDate = new Date();
//    }
// }

