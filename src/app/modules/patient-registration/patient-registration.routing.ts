import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
    { path: 'patient/:Reglabel', component: RegistrationComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PatientRegistrationRoutingModule { 
    constructor(){
        console.log("Patient Registration routing");
    }
}
