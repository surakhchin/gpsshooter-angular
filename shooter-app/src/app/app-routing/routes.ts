import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { SinglePlayerComponent } from '../single-player/single-player.component';
import { MultiPlayerComponent } from '../multi-player/multi-player.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'about',     component: AboutComponent },
  { path: 'contact',     component: ContactComponent },
  { path: 'single-player',     component: SinglePlayerComponent },
  { path: 'multi-player',     component: MultiPlayerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
