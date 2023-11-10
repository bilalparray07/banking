import { Injectable } from '@angular/core';
import { LayoutViewModel } from 'src/app/ui-models/common-view-model';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  layoutVM: LayoutViewModel = new LayoutViewModel();
  constructor() { }

    // Convert Enum into Array
    EnumToStringArray(enumme: any) {
      const StringIsNumber = (value: any) => isNaN(Number(value)) === false;
      return Object.keys(enumme)
        .filter(StringIsNumber)
        .map((key) => enumme[key]);
    }
}
