import { Server } from '../server';
import { Component, OnInit, Input } from '@angular/core';
import { ServerService } from '../server.service';
import { ServerListComponent } from '../server-list/server-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server-details',
  templateUrl: './server-details.component.html',
  styleUrls: ['./server-details.component.css']
})
export class ServerDetailsComponent implements OnInit {

  id: number;
  employee: Server;

  constructor(private route: ActivatedRoute,private router: Router,
    private serverService: ServerService) { }

  ngOnInit() {
    this.server = new Server();

    this.id = this.route.snapshot.params['id'];
    
    this.serverService.getServer(this.id)
      .subscribe(data => {
        console.log(data)
        this.server = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['servers']);
  }
}
