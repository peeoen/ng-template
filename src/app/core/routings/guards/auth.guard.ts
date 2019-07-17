import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { APP_CONFIG } from 'src/app/app.config';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('canActivate');

        if (!this.authenticated()) {

            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

    async canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('canActivateChild');
        if (!this.authenticated()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }


    private authenticated(): boolean {
        if (localStorage.getItem(APP_CONFIG.tokenName)) {
            return true;
        }
        return false;
    }
}
