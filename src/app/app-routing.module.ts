import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FRONTComponent } from "./FRONT/front.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard} from "./auth-guard.service";

const appRoutes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'kanban-board', component: FRONTComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: '/login'}
]

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}