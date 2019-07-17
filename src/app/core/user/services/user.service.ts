import { Injectable } from '@angular/core';
import { APP_CONFIG } from 'src/app/app.config';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor() { }

    login(username: string, password: string) {
        localStorage.setItem(APP_CONFIG.tokenName, 'token');
    }

    logout() {
        localStorage.removeItem(APP_CONFIG.tokenName);
    }

}
