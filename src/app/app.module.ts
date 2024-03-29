import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {HeaderComponent} from './components/header/header.component';
import {WelcomeContentComponent} from './components/welcome-content/welcome-content.component';
import {ContentComponent} from './components/content/content.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import {LoginComponent} from './components/login-form/login/login.component';
import {RegisterComponent} from './components/login-form/register/register.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ManagementComponent} from './components/management/management.component';
import {RoomsComponent} from './components/management/rooms/rooms.component';
import {RoomDetailComponent} from './components/management/rooms/room-detail/room-detail.component';
import {MatCardModule} from "@angular/material/card";
import {RoomComponent} from './components/management/room/room.component';
import { InfoComponent } from './components/management/room/info/info.component';
import { HeroComponent } from './components/management/room/hero/hero.component';
import { MerchantComponent } from './components/management/room/merchant/merchant.component';
import { ItemDetailsComponent } from './components/management/room/merchant/item-details/item-details.component';
import {MatSelectModule} from "@angular/material/select";
import { HeroInfoDialogComponent } from './components/management/room/info/hero-info-dialog/hero-info-dialog.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import { AbilityCardsComponent } from './components/management/room/hero/ability-cards/ability-cards.component';
import { ItemsManagementComponent } from './components/management/room/hero/items-management/items-management.component';
import { PerksManagementComponent } from './components/management/room/hero/perks-management/perks-management.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HeaderComponent,
    WelcomeContentComponent,
    ContentComponent,
    LoginComponent,
    RegisterComponent,
    ManagementComponent,
    RoomsComponent,
    RoomDetailComponent,
    RoomComponent,
    InfoComponent,
    HeroComponent,
    MerchantComponent,
    ItemDetailsComponent,
    HeroInfoDialogComponent,
    AbilityCardsComponent,
    ItemsManagementComponent,
    PerksManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatTabsModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
