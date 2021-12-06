import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class PersonalDetailsComponent implements OnInit {
  public mask: string = "0000-0000-0000-0000";
    public cvcMask: string = "000";

    @Input() public personalDetails: FormGroup | any;
  constructor() { }

  ngOnInit(): void {
  }

}
