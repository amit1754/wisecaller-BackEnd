export interface IUser {
  mobileNo: Number;
}

export interface IOtp {
  otp: Number;
  user: String;
}

export interface IAuthToken {
  otp: Number;
  user: String;
}
