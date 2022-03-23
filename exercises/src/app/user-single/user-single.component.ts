import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser, Role, Gender } from '../models/user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() users: IUser[] = [] 
  @Input() role = Role
  @Output() selected = new EventEmitter<IUser>();
  
  constructor() { }

  ngOnInit(): void {
  }


  deleteUser(user: IUser) {
    this.selected.emit(user)
  }
}
