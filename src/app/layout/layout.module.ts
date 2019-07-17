import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';

const LAYOUTS = [
    HeaderComponent,
];


@NgModule({
    declarations: [
        ...LAYOUTS
    ],
    exports: [
        ...LAYOUTS
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
})
export class LayoutModule {

}
