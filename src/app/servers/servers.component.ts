import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'NO serve create'
  serverName='TestServer';
  serverCreated=false;
  servers = ['Testserver', 'Testserver 2'];
  constructor() { 
    setTimeout(()=> {this.allowNewServer=true}, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
      this.serverCreationStatus = 'SERVER WAS CREATE name is' +' '+ this.serverName;
      this.servers.push(this.serverName);
      this.serverCreated=true;
    }
  onUpdateServerName(event: any ){
    this.serverName= (<HTMLInputElement > event.target).value;
    }
 


}
