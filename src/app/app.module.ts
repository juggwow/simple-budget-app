import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequirementListComponent } from './requirement-list/requirement-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MobileFormatPipe } from './mobile-format.pipe';
import { RequirementFormComponent } from './requirement-form/requirement-form.component';
import { RequirementApprovalComponent } from './requirement-approval/requirement-approval.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { RequirementViewComponent } from './requirement-view/requirement-view.component';
import { StatusFormatPipe } from './status-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RequirementListComponent,
    MobileFormatPipe,
    RequirementFormComponent,
    RequirementApprovalComponent,
    LoginComponent,
    RequirementViewComponent,
    StatusFormatPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
