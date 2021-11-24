import { Component, NgModule } from "@angular/core";
import { RouterModule, Router, Routes } from "@angular/router";
import { FRONTComponent } from "./FRONT/front.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/board', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'board', component: FRONTComponent}
]

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}