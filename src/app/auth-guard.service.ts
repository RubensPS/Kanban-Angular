import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate{

    constructor(private router: Router) {}

    
    

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {
        const isUserAuth = localStorage.getItem('token');
                
        if (!isUserAuth) {
            alert('You need to login to access!');
            this.router.navigateByUrl('login');
            return false
        }    

        return !!isUserAuth
    }

}