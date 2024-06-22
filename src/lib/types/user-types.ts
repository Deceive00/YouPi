import { Menu, Vendor } from "./vendor-types";

export interface User {
  nim: string;
  email: string;
  firstName: string;
  lastName: string;
  isSender: Boolean;
  phoneNumber: string;
  dob: Date;
  profilePicture: string;
  senderReview: number;
}

export enum AuthState {
  Authenticated = "Authenticated",
  NotAuthenticated = "Not Authenticated",
  Loading = "Loading",
}

export interface UserRegis {
  nim: string;
  email: string;
  firstName: string;
  lastName: string;
  dob: Date;
  phoneNumber: string;
  password: string;
  confirmationPassword: string;
}

export interface UserCartOld {
  campusName: string;
  vendorName: string;
  name: string;
  description: string;
  price: Number;
  coverImage: string;
  notes: string;
  quantity: Number;
}

export interface UserCart {
  vendorId: string;
  menus: MenuCart[];
}

export interface UserCartFE {
  vendor: Vendor;
  menus: Menu[];
}

export interface MenuCart {
  menuId: string;
  menuQuantity: Number;
  notes: string;
}

export enum UserType {
  USER = "User",
  VENDOR = "Vendor",
}
