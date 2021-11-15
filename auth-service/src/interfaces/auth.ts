export interface IUser {
  phones: Object;
  phone: String;
}

export interface IOtp {
  otp: Number;
  mobileNo: String;
}

export interface IAuthToken {
  otp: Number;
  user: String;
}
