import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {
  public isVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails() {
    this.isVisible = !this.isVisible
  }
}
