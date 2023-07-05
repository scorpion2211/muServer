import { Component, OnInit } from '@angular/core';
import { ESizeModal } from 'src/app/utils/modalSize.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showModalLogin = false;
  isLogin = false;
  sizeModal = ESizeModal;
  constructor() {}

  ngOnInit() {}

  showModal(isLogin = true) {
    this.showModalLogin = true;
    this.isLogin = isLogin;
  }
}
