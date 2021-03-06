import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeathSquareComponent } from './death-square/death-square.component';
import { TurretComponent } from './turret/turret.component';
import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';
import { TieFighterComponent } from './tie-fighter/tie-fighter.component';

@NgModule({
  imports: [
    CommonModule,  
    DeathSquareComponent,
    TurretComponent,
    LaserCannonComponent,
    TieFighterComponent  
  ],
  declarations: []
})
export class InternalDefensesModule { }
