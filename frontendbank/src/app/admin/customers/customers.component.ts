import { Component, OnInit } from '@angular/core';
import { customerView } from '../../ui-models/customer-view-model';
import { CustomerServiceModel } from 'src/service-model/customers';
import { CustomerService } from 'src/app/services/General/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  viewModel:customerView=new customerView()
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }
  closePopup() {
    this.viewModel.displayStyle = "none";
  }
  openAddEditModal( id: string|null) {
    if (id==null) {
      this.viewModel.editMode = false;
      this.viewModel.customerObject= new CustomerServiceModel()
    } else {
      this.viewModel.editMode = true;
      this.selectCustomer(id);
    }
    this.viewModel.displayStyle = "block";

  }
  loadCustomers(): void {
    this.customerService.getCustomers().subscribe(data => {
      this.viewModel.customerList = data;
    });
  }

  selectCustomer(customerId: any): void {

    this.customerService.getCustomerDetails(customerId).subscribe(data => {
      console.log('Customer details data:', data);
      this.viewModel.customerObject = data;
    });
  }


  saveCustomer(): void {
    let id=this.viewModel.customerObject._id
    if (id) {
      this.customerService.updateCustomer(this.viewModel.customerObject._id, this.viewModel.customerObject).subscribe(
        () => {
          alert("Customer Updated SuccessFully!")
          this.viewModel.displayStyle = "none";
          this.loadCustomers();
        },
        (error) => {
          console.error("Error updating customer:", error);
          // You can add additional error handling here, such as showing an error message to the user.
        }
      );
    } else {

      this.customerService.createCustomer(this.viewModel.customerObject).subscribe(
        (data) => {
          alert("Customer Added successfully!");
          this.loadCustomers();
          this.viewModel.displayStyle = "none";
        },
        (error) => {
          console.error("Error creating customer:", error);
          // You can add additional error handling here, such as showing an error message to the user.
        }
      );
    }
  }


  deleteCustomer(customerId: any): void {
    this.customerService.deleteCustomer(customerId).subscribe(() => {
      this.loadCustomers();
      this.viewModel.customerObject;
      alert('Customer deleted Successfully')
    });
  }

  uploadProfilePicture(event: any, customerId: string): void {
    const file = event.target.files[0];
    if (file) {
      this.customerService.uploadProfilePicture(customerId, file).subscribe(() => {

        this.loadCustomers();
      });
    }
  }

}
