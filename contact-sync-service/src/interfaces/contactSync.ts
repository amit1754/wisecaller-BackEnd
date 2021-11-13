export interface IContactSync {
  customId: Number;
  first_name: String;
  last_name: String;
  profile_image: String;
  local_profile_image_path: String;
  phones: Object;
}

export interface ICalenderSync {
  user: string;
  first_name: string;
  last_name: string;
  profile_image: string;
  local_profile_image_path: string;
  phones: Object;
}
