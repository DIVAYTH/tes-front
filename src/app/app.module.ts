import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app/app.component';
import {GuildComponent} from './components/guild/guild.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './components/login/login.component';
import {MainComponent} from './components/main/main.component';
import {UserComponent} from './components/user/user.component';
import {CreateHeroComponent} from './components/create-hero/create-hero.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegistrationService} from "./services/registration.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthorizationService} from "./services/authorization.service";
import {MainService} from "./services/main.service";
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalGuildComponent} from './components/modal-guild/modal-guild.component';
import {ModalQuestComponent} from './components/modal-quest/modal-quest.component';
import {AdminComponent} from './components/admin/admin.component';
import {ModalQuestNewComponent} from './components/modal-quest-new/modal-quest-new.component';
import {RequestDecisionComponent} from './components/request-decision/request-decision.component';
import {ModalQuestEndComponent} from './components/modal-quest-end/modal-quest-end.component';
import {ModalRangComponent} from './components/modal-rang/modal-rang.component';
import {MainGuard} from "./guards/main.guard";
import {LoginGuard} from "./guards/login.guard";

const itemRoutes: Routes = [
  {path: 'guild', component: GuildComponent},
  {path: 'user', component: UserComponent},
  {path: 'admin', component: AdminComponent},
  {path: '', redirectTo: 'user', pathMatch: 'full'},
]

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'create', component: CreateHeroComponent},
  {path: 'main', component: MainComponent, children: itemRoutes, canActivate: [MainGuard]}
];

@NgModule({
  declarations: [
    GuildComponent,
    AppComponent,
    LoginComponent,
    MainComponent,
    UserComponent,
    CreateHeroComponent,
    ModalGuildComponent,
    ModalQuestComponent,
    AdminComponent,
    ModalQuestNewComponent,
    RequestDecisionComponent,
    ModalQuestEndComponent,
    ModalRangComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [RegistrationService, AuthorizationService, MainService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
