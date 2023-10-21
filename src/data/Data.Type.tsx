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
}
export interface UserLogin {
  email: String;

  password: String;
}
