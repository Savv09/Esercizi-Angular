import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() isVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails() {
    this.isVisible = !this.isVisible
  }
}
