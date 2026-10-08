import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPage } from "./login-page";

const routes: Routes = [
    {
        path: '',
        component: LoginPage,
    },
];

@NgModule({
    declarations: [LoginPage],
    imports: [RouterModule.forChild(routes)],
})
export class LoginPageModule { }