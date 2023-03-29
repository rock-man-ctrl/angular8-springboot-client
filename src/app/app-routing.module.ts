import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServersListComponent } from './components/servers-list/servers-list.component';
import { ServerDetailsComponent } from './components/server-details/server-details.component';
import { AddServerComponent } from './components/add-server/add-server.component';

const routes: Routes = [
  { path: '', redirectTo: 'servers', pathMatch: 'full' },
  { path: 'servers', component: ServersListComponent },
  { path: 'servers/:id', component: ServerDetailsComponent },
  { path: 'add', component: AddServerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }