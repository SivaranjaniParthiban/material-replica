import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordianComponent } from './accordian/accordian.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { BadgeComponent } from './badge/badge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CardComponent } from './card/card.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { MatchipsComponent } from './matchips/matchips.component';
import { canActivate } from './AuthGaurdService';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'AppComponent',
  },
  {
    path: 'accordion',
    component: AccordianComponent,
    canActivate: [canActivate],
  },
  {
    path: 'autocomplete',
    component: AutoCompleteComponent,
    canActivate: [canActivate],
  },
  {
    path: 'badge',
    component: BadgeComponent,
    canActivate: [canActivate],
  },

  {
    path: 'bottom-sheet',
    component: BottomSheetComponent,
    canActivate: [canActivate],
  },
  {
    path: 'button',
    component: ButtonComponent,
    canActivate: [canActivate],
  },
  {
    path: 'toggle',
    component: ButtonToggleComponent,
    canActivate: [canActivate],
  },
  {
    path: 'card',
    component: CardComponent,
    canActivate: [canActivate],
  },
  {
    path: 'checkbox',
    component: CheckBoxComponent,
    canActivate: [canActivate],
  },
  {
    path: 'chips',
    component: MatchipsComponent,
    canActivate: [canActivate],
  },
  // {
  //   path: '',
  //   component: AppComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }


