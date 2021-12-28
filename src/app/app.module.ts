import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {NgxTypedJsModule} from 'ngx-typed-js';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HelloComponent} from './hello/hello.component';
import {FooterComponent} from './footer/footer.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HomeComponent} from './home/home.component';
import {ArticlesComponent} from './articles/articles.component';
import {RouterModule} from '@angular/router';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HelloComponent,
    FooterComponent,
    HomeComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    NgxTypedJsModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'articles',
        component: ArticlesComponent,
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full',
      },
    ]),
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
