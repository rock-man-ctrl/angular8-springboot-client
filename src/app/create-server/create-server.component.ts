import { ServerService } from '../server.service';
import { Server } from '../server';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServersComponent implements OnInit {

  server: Servers = new Server();
  submitted = false;

  constructor(private serverService: ServersService,
    private router: Router) { }

  ngOnInit() {
  }

  newServer(): void {
    this.submitted = false;
    this.server = new Server();
  }

  save() {
    this.serverService
    .createServers(this.server).subscribe(data => {
      console.log(data)
      this.server = new Servers();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/servers']);
  }
}
