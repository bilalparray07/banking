export class CustomerServiceModel {
    _id: string|any;
    firstName: string | undefined;
    lastName: string | undefined;
    emailAddress: string | undefined;
    phoneNumber: string | undefined;
    dob: string | undefined; // Consider using Date type for birthdate
    address: string | undefined;
    // accounts: string[] | undefined; // An array of associated account IDs
    // loans: string[] | undefined; // An array of associated loan IDs
    profilePicture: string | undefined;
  }
  
  export class Address {
    street: string | undefined;
    city: string | undefined;
    state: string | undefined;
    postalCode: string | undefined;
  }
