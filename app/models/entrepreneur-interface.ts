export interface Entrepreneur {
  id: number;
  firstName: string;
  lastName: string;
  code: number;
  zipCode: number;
  region?: string;
  city: string;
  street: string;
  streetNumber: number;
  apartmentNumber?: number;
  registrationNumber: string;
  dateOfRegistration: string;
  account: number;
  bank: string;
  mfo: number;
}