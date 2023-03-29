import { ServerDetailsComponent } from '../server-details/server-details.component';
import { Observable } from "rxjs";
import { ServerService } from "../server.service";
import { Server } from "../server";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-server-list",
  templateUrl: "./server-list.component.html",
  styleUrls: ["./server-list.component.css"]
})
export class ServerListComponent implements OnInit {
  servers: Observable<Server[]>;

  constructor(private serverService: ServerService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.servers = this.serverService.getServersList();
  }

  deleteServer(id: number) {
    this.serverService.deleteServer(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  serverDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateServer(id: number){
    this.router.navigate(['update', id]);
  }
}
