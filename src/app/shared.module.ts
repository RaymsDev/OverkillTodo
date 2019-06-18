import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
const MATERIAL_MODULES = [
  MatListModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...MATERIAL_MODULES
  ],
  exports: [
    ...MATERIAL_MODULES
  ]
})
export class SharedModule { }
