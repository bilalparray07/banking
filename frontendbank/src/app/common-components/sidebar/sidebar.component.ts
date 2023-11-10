import { Component, Input, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/Common/common-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public commonService:CommonServiceService) {

   }
   showTooltip:boolean=false;
  ngOnInit(): void {
  }

}
