import {Types} from 'mongoose'
export interface IcallHistory {
    user:Types.ObjectId;
    contact: object;
  }