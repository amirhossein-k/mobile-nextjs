import {ObjectId} from "mongoose";
import {USER} from "../types";

export type GridItemLayout =
  | "1x1"
  | "2x2"
  | "2x1"
  | "2x4"
  | "3x1"
  | "3x2"
  | "4x2"
  | "5x1"
  | "5x5"
  | "8x5";
/// width x height
export type GridItemType =
  | "user"
  | "button"
  | "navbar"
  | "address"
  | "information"
  | "list";
