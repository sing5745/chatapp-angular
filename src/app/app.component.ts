import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  items : AngularFireList<any>;
  msg: string = '';
  msgList = [ ];

  myArr = [

    {'title':'MyBlog'}
  ];

  constructor(public af: AngularFireDatabase) {
    this.items = af.list('/messages');
  }

  send(chatMsg: string) {
    this.items.push({ message: chatMsg });
    this.msg = '';
    this.msgList.push({message: chatMsg});
  }
}
