import { Component, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './pages/registration/registration.component';

import { PAGES } from './pages';
// import { COMPONENTS } from './components';
import { SharedModule } from 'src/app/shared/shared.module';
import { PatientRegistrationRoutingModule } from './patient-registration.routing';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { COMPONENTS } from './components';
import { TabDetailsShowComponent } from './components/tab-details-show/tab-details-show.component';

@NgModule({
   imports: [
        CommonModule,
        PatientRegistrationRoutingModule,
        SharedModule
    ],
    exports: [
      ...PAGES,
      ...COMPONENTS,
  ],
  declarations: [
    RegistrationComponent,
    ...PAGES,
    ...COMPONENTS,
    PersonalDetailsComponent,
    TabDetailsShowComponent
  ],
providers: [
    // DashboardRepository,
    // DashboardService
],
schemas: [
    NO_ERRORS_SCHEMA
]
})
export class PatientRegistrationModule { }
