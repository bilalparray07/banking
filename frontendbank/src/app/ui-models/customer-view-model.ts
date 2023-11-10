import { CustomerServiceModel } from "../../service-model/customers";

export class customerView{
    modalTitle: string = '';
    displayStyle = "none";
    editMode:boolean=false;
    customerList:CustomerServiceModel []=[];
    customerObject:CustomerServiceModel=new CustomerServiceModel()
}