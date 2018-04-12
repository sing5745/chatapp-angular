import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  items : AngularFireList<any>; //using to put messages in firebasse database
  msg: string = '';
  msgList = [ ]; //to display messages


  constructor(public af: AngularFireDatabase) {

    this.items = af.list('/messages');
  }

  todaysDate(){

    
    
  }

  send(chatMsg: string) {
    this.items.push({ message: chatMsg  + " " + new Date().toLocaleString()});
    this.msg = '';
    this.msgList.push({message: chatMsg});
  }
}
