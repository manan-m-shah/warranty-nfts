export type User = {
  name: string;
  email: string;
}

export type Item = {
  name: string;
  description: string;
  imageURI: string;
  baseWarranty: number;
  loyaltyLimit: number;
  loyaltyPoints: number;
  soulBound: boolean;
}

export type Warranty = {
  serialNumber: string;
  repairStatus: string;
  itemId: number;
  purchaseDate: number;
  warranty: number;
  loyaltyLimit: number;
  loyaltyPoints: number;
  soulBound: boolean;
}