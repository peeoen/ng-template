import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

const MATERIALS = [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
];

@NgModule({
  imports: [
      ...MATERIALS
  ],
  exports: [
      ...MATERIALS
  ],
})
export class MaterialModule { }
