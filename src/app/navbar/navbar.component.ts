import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  toggleMobileMenu() {
    console.log('clicked');
    document.querySelector('.mobile-menu').classList.toggle('hidden');
  }


}
