import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainView } from './views/main/main.view';


export const routingPaths = {
    main: '',
};

const routes: Routes = [
    {
        path: '',
        component: MainView
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LoginRoutingModule {}
