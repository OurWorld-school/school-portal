export interface UserReg {
  firstName: String;
  lastName: String;
  email: String;
  phoneNumber: String;
  contactAdress: String;
  password: String;
  confirmPassword: String;
  schoolRegNumber: String;
  passportPhoto: String;
  roles: String;
  // currentClass: String;
}
export interface UserLogin {
  email: String;

  password: String;
}
export interface Nursery1Data {
  year: String;
  classes: String;
  email: String;
  user: any;
  term: String;
  schoolRegNumber: String;
  English: [];
  Mathematics: [];

  SocialHabit: [];
  HealthScience: [];
  BasicScience: [];
  AgricScience: [];
  Rhymes: [];
  Writing: [];
  TotalScore: Number;
  TotalAverage: String;
  Position: String;
  numberInClass: Number;
  TotalGrade: String;
  Remark: String;
  Signature: String;
}
