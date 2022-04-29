import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAdmin: boolean = false;

  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this.isAdmin=this._userService.isAdmin;
  }

}
