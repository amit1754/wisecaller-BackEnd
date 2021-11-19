export interface IUser {
  phones: Object;
  phone: String;
  profile_image:null;
}

export interface IOtp {
  otp: Number;
  mobileNo: String;
}

export interface IAuthToken {
  otp: Number;
  user: String;
}
