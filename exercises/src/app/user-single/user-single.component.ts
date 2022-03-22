import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../models/user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() users: IUser[] = [] 

  constructor() { }

  ngOnInit(): void {
  }

}
