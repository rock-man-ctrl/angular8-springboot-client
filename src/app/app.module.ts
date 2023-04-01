import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateServerComponent } from './create-server/create-server.component';
import { ServerDetailsComponent } from './server-details/server-details.component';
import { ServerListComponent } from './server-list/server-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateServerComponent } from './update-server/update-server.component';
import { AddServerComponent } from './components/add-server/add-server.component';
import { serverServerComponent } from './components/server-server/tutorial-server.component';
import { ServerDetailsComponent } from './components/server-details/server-details.component';
import { ServersListComponent } from './components/servers-list/servers-list.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateServerComponent,
    ServerDetailsComponent,
    ServerListComponent,
    UpdateServerComponent,
    AddServerComponent,
    serverServerComponent,
    ServerDetailsComponent,
    ServersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
