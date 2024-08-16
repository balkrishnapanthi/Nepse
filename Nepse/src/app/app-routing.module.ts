import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AllCompaniesComponent } from './all-companies/all-companies.component';

const routes: Routes = [
  { component: AllCompaniesComponent, path: "" },
  { component: CompanyDetailsComponent, path: "companyDetails/:symbol" },
  { component: AllCompaniesComponent, path: "allCompanies" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
