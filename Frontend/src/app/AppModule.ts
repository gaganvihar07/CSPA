import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { propertycardcomponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-card/property-list/property-list.component';
import { NavBarComponent } from './Nav-Bar/Nav-Bar.component';


@NgModule({
  declarations: [
    AppComponent, propertycardcomponent, PropertyListComponent, NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
