import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.css']
})
export class ExampleFormComponent implements OnInit {

 public mask: string = "0000-0000-0000-0000";
    public cvcMask: string = "000";

    @Input() public personalDetails: FormGroup | any;
  constructor() { }

  ngOnInit(): void {
  }

}
