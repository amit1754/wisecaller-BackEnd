export interface IUser {
  phones: Object;
  phone: String;
  profile_image: null;
  notification_token: String;
}

export interface IOtp {
  otp: Number;
  mobileNo: String;
}

export interface IAuthToken {
  otp: Number;
  user: String;
}
