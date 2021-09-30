import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { SinglePlayerComponent } from '../single-player/single-player.component';
import { MultiPlayerComponent } from '../multi-player/multi-player.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full',  component: HomeComponent },
  { path: 'about', pathMatch: 'full',     component: AboutComponent },
  { path: 'contact', pathMatch: 'full',    component: ContactComponent },
  { path: 'single-player', pathMatch: 'full',    component: SinglePlayerComponent },
  { path: 'multi-player', pathMatch: 'full',    component: MultiPlayerComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
];
