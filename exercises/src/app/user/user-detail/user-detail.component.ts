import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() isVisible: boolean = true;
  @Output() hide: EventEmitter<boolean> = new EventEmitter<boolean>();
 
  constructor() { }

  ngOnInit(): void {
  }
}
