
export class accountServiceModel {
    _id:any
    fullName: string = "";
    mothersName: string = "";
    fathersName: string = "";
    dob!: string;
    address: string = "";
    country: string = "";
    state: string = "";
    city: string = "";
    phoneNumber: string = "";
    pincode: string = "";
    educationLevel!: EducationLevel
    proofOfIdentification!: ProofOfIdentification
    accountType!: AccountType
    idNumber: string = "";
    uploadIdCardImage: string = "";
  }


export enum EducationLevel{
    highSchool=0,
    graduate=1,
    undergraduate=2,
    masters=3,
    phd=4,
    none=5
}

export enum ProofOfIdentification {
    driverslicense=0,
    adhaarcard=1,
    pancard=2,
    nationalidentitycard=3,
    passport=4
}

export enum AccountType{
    savings=0,
    current=1,
    fixed=2,
    salary=3
}