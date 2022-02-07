import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/login.component';
import { CompanyListComponent } from './company-list/company-list.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'companies', component: CompanyListComponent, canLoad: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}