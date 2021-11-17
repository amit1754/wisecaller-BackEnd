export interface IStatus {
  status: string;
  application_types: Object;
}
export interface ISubStatus {
  status: string;
  parentId: string;
}
export interface ICustomStatus {
  custom_name: String;
  start_date: Date;
  end_date: Date;
  is_allday_status: Boolean;
  is_repeatL: Boolean;
  RRULE: String;
  time_zone: String;
  status: string;
  substatus: String;
  notes: Object;
  display_to: String;
  auto_sms: Boolean;
  customId: Number;
}
