import {ObjectId} from "mongoose";
import {GridItemLayout, GridItemType} from "../config/site-config";

interface ADRESS {
  location: string;
  state: string;
  zipcode: string;
}
export interface USER {
  email: string;
  isAdmin: boolean;
  isVerfied: boolean;
  address: ADRESS[];
  listordershop: [];
  name: string;
  __v: any;
  _id: ObjectId;
}

export interface ITEMS {
  value: any;

  name: any;
}

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title?: string;
  name?: string;
  value?: string | boolean;
  label?: string;
  lenght?: number;
  user?: USER;
  items?: ITEMS[];
}
