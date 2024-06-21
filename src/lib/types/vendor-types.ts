export interface Menu{
  uid: string;
  name: string;
  description: string;
  image: string;
  price: number;
  notes: string;
  quantity:number;
}

export interface MenuCategory {
  name: string;
  menus: Menu[];
}

export interface Vendor {
  email: string;
  name: string;
  coverImage: string;
  rating: number; //rating = banyak bintangnya
  review: number; //review = counter udh berapa kali
  id: string;
  description: string;
  campusName: string;
  categories: MenuCategory[];
}

export interface Campus {
  name: string;
  vendors: Vendor[];
}

export interface VendorRegis {
  campusName: string;
  email: string;
  name: string;
  coverImage: string;
  description: string;
  password: string;
  confirmationPassword: string;
} 