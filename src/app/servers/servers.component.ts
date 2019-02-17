import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template:'',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
 
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreatoinStatus = 'No server was created!'
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  constructor() {
    setTimeout(()=> { 
      this.allowNewServer = true;
    }, 6000)
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreatoinStatus = 'Server was created! name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
   this.serverName = (<HTMLInputElement>event.target).value;
  }
}
