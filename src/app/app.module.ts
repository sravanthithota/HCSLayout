import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BacklogModule } from './modules/backlog/backlog.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PatientRegistrationModule } from './modules/patient-registration/patient-registration.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent
    ],
  imports: [
    BrowserModule,
     NgbModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    DashboardModule,
    BacklogModule,
    PatientRegistrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
