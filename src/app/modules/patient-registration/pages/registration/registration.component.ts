import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StepperComponent } from '@progress/kendo-angular-layout';
import { BreadCrumbItem } from "@progress/kendo-angular-navigation";
const defaultItems: BreadCrumbItem[] = [
  {
    text: "Registration",
    title: "Registration",
    icon: "home", 
   },
  {
    text: "Patient Master Index",
    title: "Products",
  },
];
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})


export class RegistrationComponent implements OnInit {
  public items: BreadCrumbItem[] = [...defaultItems];
  public currentStep = 0;
  public opened = false;
  public isRegister:boolean = false;

  
  @ViewChild('stepper', {static: true})
  public stepper: StepperComponent |any;
  constructor() { }
  public registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    birthDate: new FormControl(new Date(2000, 10, 10)),
    email: new FormControl('', Validators.email),
    acceptNews: new FormControl()
});
  ngOnInit(): void {
  }

  private isStepValid = (index: number): boolean => {
    console.log(index);
    return true;
    //return this.getGroupAt(index).valid || this.currentGroup.untouched;
};

private shouldValidate = (index: number): boolean => {
    //return this.getGroupAt(index).touched && this.currentStep >= index;
    return true && this.currentStep >= index;
};
public close(status:any) {
  console.log(`Dialog result: ${status}`);
  this.opened = false;
  this.isRegister = false; 
}

public open() {
  this.opened = true;
}
public addRegistration(){
  this.isRegister = true;
}
  

  public steps = [
     
    {
      label: 'Personal Details',
      isValid: this.isStepValid,
      validate: this.shouldValidate
    },{
          label: 'Next Of Kin',
          isValid: this.isStepValid,
          validate: this.shouldValidate
      },
      {
        label: 'Vitals',
        isValid: this.isStepValid,
        validate: this.shouldValidate
    },
    {
      label: 'Allergies',
      isValid: this.isStepValid,
      validate: this.shouldValidate
  },
     
      {
          label: 'Payment Option',
          isValid: this.isStepValid,
          validate: this.shouldValidate
      },
      {
        label: 'Medication',
        isValid: this.isStepValid,
        validate: this.shouldValidate
    },
    {
      label: 'Visit',
      isValid: this.isStepValid,
      validate: this.shouldValidate
  }
  ];
  

  public form = new FormGroup({
    personalDetails: new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      about: new FormControl('')
  }),
      accountDetails: new FormGroup({
        country: new FormControl('', [Validators.required]),
        gender: new FormControl(null, [Validators.required]),
        about: new FormControl('')
      }),
     
      paymentDetails: new FormGroup({
          paymentType: new FormControl(null, Validators.required),
          country: new FormControl('', [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      about: new FormControl('')
      }),
      paymentDetails1: new FormGroup({
        paymentType: new FormControl(null, Validators.required),
        country: new FormControl('', [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    about: new FormControl('')
    }),
    paymentDetails2: new FormGroup({
      paymentType: new FormControl(null, Validators.required),
      country: new FormControl('', [Validators.required]),
  gender: new FormControl(null, [Validators.required]),
  about: new FormControl('')
  }),
  paymentDetails3: new FormGroup({
    paymentType: new FormControl(null, Validators.required),
    country: new FormControl('', [Validators.required]),
gender: new FormControl(null, [Validators.required]),
about: new FormControl('')
})
  });

  public get currentGroup(): FormGroup {
    
      return this.getGroupAt(this.currentStep);
  }

  public next(): void {
      // if (this.currentGroup.valid && this.currentStep !== this.steps.length) {
      //     this.currentStep += 1;
      //     return;
      // }
        if (this.currentStep !== this.steps.length) {
           this.currentStep += 1;
           return;
       }

      this.currentGroup.markAllAsTouched();
      this.stepper.validateSteps();
  }

  public prev(): void {
      this.currentStep -= 1;
  }

  public submit(): void {
    
    this.currentStep= 0;
      // if (!this.currentGroup.valid) {
      //     this.currentGroup.markAllAsTouched();
      //     this.stepper.validateSteps();
      // }
      // if (this.form.valid) {
      //     console.log('Submitted data', this.form.value);
      // }
      this.open();
  }

  private getGroupAt(index: number): FormGroup {
      const groups = Object.keys(this.form.controls).map(groupName =>
          this.form.get(groupName)
          ) as FormGroup[];
      console.log(groups);
      return groups[index];
  }

}
