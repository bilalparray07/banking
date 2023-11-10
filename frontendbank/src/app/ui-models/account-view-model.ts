import { accountServiceModel } from "src/service-model/accounts";

export class AccoutsVm{
    modalTitle: string = '';
    displayStyle = "none";
    editMode:boolean=false;
    accountsObj:accountServiceModel=new accountServiceModel();
    accountsListL:accountServiceModel[]=[]
    listOfIdProofType = new Array<string>();
    listOfEducationLevelType=new Array<string>()
    listOfAccountType=new Array<string>()
    isInputValid: boolean = true;
    formSubmitted:boolean=false;
    validations = {
        fullName: [
            { type: 'required', message: 'Full Name is Required' },
            { type: 'minlength',value: 3, message: 'Minimum Length is 3 Characters' },
            { type: 'maxlength',value: 30, message: 'Maximum Length is 30 Characters' },
            { type: "pattern", message: "Not Valid Format !"}
        ],
        fathersName: [
            { type: 'required', message: 'Fathers Name is Required' },
            { type: 'minlength',value: 3, message: 'Minimum Length is 3 Characters' },
            { type: 'maxlength',value: 20, message: 'Maximum Length is 20 Characters' },
            { type: "pattern", message: "Not Valid Format !"}
        ],

        mothersName: [
            { type: 'required', message: 'Mothers Name is Required' },
            { type: 'minlength',value: 3, message: 'Minimum Length is 3 Characters' },
            { type: 'maxlength',value: 30, message: 'Maximum Length is 30 Characters' },
            { type: "pattern", message: "Not Valid Format !"}
        ],
        countryName: [
            { type: 'required', message: 'Country Name is Required' },
            { type: 'minlength',value: 3, message: 'Minimum Length is 3 Characters' },
            { type: 'maxlength',value: 20, message: 'Maximum Length is 20 Characters' },
            { type: "pattern", message: "Not Valid Format !"}
        ],
        stateName: [
            { type: 'required', message: 'State Name is Required' },
            { type: 'minlength',value: 3, message: 'Minimum Length is 3 Characters' },
            { type: 'maxlength',value: 30, message: 'Maximum Length is 30 Characters' },
            { type: "pattern", message: "Not Valid Format !"}
        ],
        cityName: [
            { type: 'required', message: 'City Name is Required' },
            { type: 'minlength',value: 3, message: 'Minimum Length is 3 Characters' },
            { type: 'maxlength',value: 20, message: 'Maximum Length is 20 Characters' },
            { type: "pattern", message: "Not Valid Format !"}
        ],
        PermenantAddress: [
            { type: 'required', message: 'Permenant Address is Required' },
            { type: 'minlength',value: 3, message: 'Minimum Length is 3 Characters' },
            { type: 'maxlength',value: 50, message: 'Maximum Length is 50 Characters' },
            { type: "pattern", message: "Not Valid Format !"}
        ],
        pincode: [
            { type: 'required', message: 'Pincode is Required' },
            { type: 'minlength',value: 3, message: 'Minimum Length is 3 Characters' },
            { type: 'maxlength',value: 8, message: 'Maximum Length is 8 Characters' },
            { type: "pattern", message: "Not Valid Format !"}
        ],
          dob: [
            { type: 'required', message: 'D-O-B is Required' },
        ],
        phoneNumber: [
            { type: 'required', message: 'Phone Number is Required' },
            { type: 'minlength',value: 3, message: 'Minimum Length is 3 Characters' },
            { type: 'maxlength',value: 10, message: 'Maximum Length is 10 Characters' },
            { type: "pattern", message: "Not Valid Format !"}
        ],
        idNumber: [
            { type: 'required', message: 'Id Card Number is Required' },
            { type: 'minlength',value: 3, message: 'Minimum Length is 3 Characters' },
            { type: 'maxlength',value: 8, message: 'Maximum Length is 8 Characters' },
            { type: "pattern", message: "Not Valid Format !"}
        ],


        accountType: [
            { type: 'required', message: 'Account Type is Required' },
        ],
        educationLevel: [
            { type: 'required', message: 'Education Level is Required' },

        ],
        proofOfIdentification:[
        { type: 'required', message: 'Proof Of Identification is Required' },

    ],
    }
}