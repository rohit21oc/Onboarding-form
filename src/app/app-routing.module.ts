import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './components/personal/personal.component';
import { KycComponent } from './components/kyc/kyc.component';
import { PassportVisaComponent } from './components/passport-visa/passport-visa.component';
import { FamilyComponent } from './components/family/family.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { DocumentComponent } from './components/document/document.component';
import { ResumeComponent } from './components/resume/resume.component';
import { FinalComponent } from './components/final/final.component';
import { PreviousEmploymentComponent } from './components/previous-employment/previous-employment.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { EmployeeDataComponent } from './components/employee-data/employee-data.component';
import { LoginByNumberComponent } from './components/login-by-number/login-by-number.component';
// import { adminAuthGuard } from './guards/admin-auth.guard';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { PendingUserComponent } from './components/pending-user/pending-user.component';
import { TimeSheetComponent } from './components/time-sheet/time-sheet.component';
import { TimeSheetViewComponent } from './components/time-sheet/time-sheet-view/time-sheet-view.component';

// Employee details component
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmpkycComponent } from './components/employee-details/empkyc/empkyc.component';
import { EmppassportComponent } from './components/employee-details/emppassport/emppassport.component';
import { EmpfamilyComponent } from './components/employee-details/empfamily/empfamily.component';
import { EmppreviousEmployeeComponent } from './components/employee-details/empprevious-employee/empprevious-employee.component';
import { EmpeducationComponent } from './components/employee-details/empeducation/empeducation.component';
import { EmpskillsComponent } from './components/employee-details/empskills/empskills.component';
import { EmpcertificateComponent } from './components/employee-details/empcertificate/empcertificate.component';
import { EmpdocumentComponent } from './components/employee-details/empdocument/empdocument.component';
import { EmpresumeComponent } from './components/employee-details/empresume/empresume.component';
import { EmpfinalComponent } from './components/employee-details/empfinal/empfinal.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"personal",component:PersonalComponent},
  {path:"kyc",component:KycComponent},
  {path:"passport",component:PassportVisaComponent},
  {path:"family",component:FamilyComponent},
  {path:"previousEmployee",component:PreviousEmploymentComponent},
  {path:"education",component:EducationComponent},
  {path:"skills",component:SkillsComponent},
  {path:"certificate",component:CertificateComponent},
  {path:"document",component:DocumentComponent},
  {path:"resume",component:ResumeComponent},
  {path:"final",component:FinalComponent},
  {path:"",component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'loginByNumber',component:LoginByNumberComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdminComponent},
  {path:'adminLogin',component:AdminLoginComponent},
  {path:"employeeData/:id",component:EmployeeDataComponent},
  {path:'thankYou',component:ThankYouComponent},
  {path:'onboarding',component:OnboardingComponent},
  {path:'pendingUser',component:PendingUserComponent},


  // Employee details routes

  {path:"admin/empdetails",component: EmployeeDetailsComponent},
  {path:"admin/empkyc",component:EmpkycComponent},
  {path:"admin/emppassport",component:EmppassportComponent},
  {path:"admin/empfamily",component:EmpfamilyComponent},
  {path:"admin/emppreviousEmployee",component:EmppreviousEmployeeComponent},
  {path:"admin/empeducation",component:EmpeducationComponent},
  {path:"admin/empskills",component:EmpskillsComponent},
  {path:"admin/empcertificate",component:EmpcertificateComponent},
  {path:"admin/empdocument",component:EmpdocumentComponent},
  {path:"admin/empresume",component:EmpresumeComponent},
  {path:"admin/empfinal",component:EmpfinalComponent},
  {path:"admin/dashboard",component:DashboardComponent},
{path:'timesheet',component:TimeSheetComponent},
  { path: 'timesheet-view/:id', component: TimeSheetViewComponent },
  {path: '**', component: HomeComponent}, //   Default route

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
