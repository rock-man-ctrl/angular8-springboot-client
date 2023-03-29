import { Component, OnInit } from '@angular/core';
import { Server } from '../Server';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-update-server',
  templateUrl: './update-server.component.html',
  styleUrls: ['./update-server.component.css']
})
export class UpdateServerComponent implements OnInit {

  id: number;
  server: Server;

  constructor(private route: ActivatedRoute,private router: Router,
    private ServerService: ServerService) { }

  ngOnInit() {
    this.server = new Server();

    this.id = this.route.snapshot.params['id'];
    
    this.serverService.getServer(this.id)
      .subscribe(data => {
        console.log(data)
        this.server = data;
      }, error => console.log(error));
  }

  updateServer() {
    this.ServerService.updateServer(this.id, this.server)
      .subscribe(data => {
        console.log(data);
        this.server = new Server();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateServer();    
  }

  gotoList() {
    this.router.navigate(['/Servers']);
  }
}
