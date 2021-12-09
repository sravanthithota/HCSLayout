import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabDetailsShowComponent } from './components/tab-details-show/tab-details-show.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
    { path: 'patient/:Reglabel', component: RegistrationComponent },
    { path: 'tabShow/:TabReg', component: TabDetailsShowComponent }
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
