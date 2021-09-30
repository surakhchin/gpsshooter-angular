import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SinglePlayerComponent } from './single-player/single-player.component';
import { MultiPlayerComponent } from './multi-player/multi-player.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from "@angular/forms";
import {
  MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatSlideToggleModule, MatCardModule, MatGridListModule
} from '@angular/material';

import {InstructionService} from "./services/instruction.service";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SinglePlayerComponent,
    MultiPlayerComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, InstructionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
