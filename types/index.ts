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

export interface CategoryMainItem {
  id: any;
  title: string;
  pic: string;
  parent: string;
  linkk: string;
}
export interface CategoryMain {
  message: string;
  success: boolean;
  category: CategoryMainItem[];
}

export interface Itemitem {
  pic?: string;
  title: string;
  time?: string;
  category?: string;
}
export interface Item {
  layout: string;
  type?: string;
  title?: string;
  item?: Itemitem[];
}

export interface product {
  title: string;
  model: string;
  price: string;
  classs?: string;
  class2?: string;
  price_offer?: string;
}
