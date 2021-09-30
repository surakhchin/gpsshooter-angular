import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,
      {
        // useHash: true,
        scrollPositionRestoration: 'enabled',
        preloadingStrategy: PreloadAllModules
      })
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
