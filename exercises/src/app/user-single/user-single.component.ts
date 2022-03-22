import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../models/user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() users: IUser[] = [] 
  @Output() selected = new EventEmitter<IUser>();
  
  constructor() { }

  ngOnInit(): void {
  }


  deleteUser(user: IUser) {
    this.selected.emit(user)
  }
}
