import { userServiceModel } from "src/service-model/user";

export class usersViewModel{
    usersObj:userServiceModel=new userServiceModel()
    hide: boolean = true;
    eyeDefault = 'default';
    isInputValid: boolean = true;
    formSubmitted:boolean=false;
    validations = {
        confirmPassword: [
            { type: 'required', message: 'Password is Required' },
            { type: 'minlength',value: 4, message: 'Minimum Length is 3 Characters' },
            { type: 'maxlength',value: 10, message: 'Maximum Length is 30 Characters' },
            { type: "pattern", message: "Not Valid Format !"}
        ],
        password: [
            { type: 'required', message: 'password is Required' },
            { type: 'minlength',value: 3, message: 'Minimum Length is 3 Characters' },
            { type: 'maxlength',value: 20, message: 'Maximum Length is 20 Characters' },
            { type: "pattern", message: "Not Valid Format !"}
        ],

        emailId: [
            { type: 'required', message: 'Email Id is Required' },
            { type: 'minlength',value: 5, message: 'Minimum Length is 3 Characters' },
            { type: 'maxlength',value: 50, message: 'Maximum Length is 30 Characters' },
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
        username: [
            { type: 'required', message: 'User Name is Required' },
            { type: 'minlength',value: 3, message: 'Minimum Length is 3 Characters' },
            { type: 'maxlength',value: 30, message: 'Maximum Length is 30 Characters' },
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