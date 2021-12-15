import { Component, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PAGES } from './pages';
// import { COMPONENTS } from './components';
import { SharedModule } from 'src/app/shared/shared.module';
import { PatientRegistrationRoutingModule } from './patient-registration.routing';
import { COMPONENTS } from './components';

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
    ...PAGES,
    ...COMPONENTS,

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
