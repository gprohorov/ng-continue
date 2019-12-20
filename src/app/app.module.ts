import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NewoneComponent } from './newone/newone.component';
import { SecondoneComponent } from './secondone/secondone.component';
import { ThirdoneComponent } from './thirdone/thirdone.component';
import { MainoneComponent } from './mainone/mainone.component';
import {FailureComponent} from './failure/failure.component';
import {MyServiceService} from './my-service.service';

const appRoutes: Routes = [
  {path: '', component: MainoneComponent},
  {path: 'second', component: SecondoneComponent},
  {path: 'third', component: ThirdoneComponent},
  {path: '**', component: FailureComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewoneComponent,
    SecondoneComponent,
    ThirdoneComponent,
    MainoneComponent,
    FailureComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
