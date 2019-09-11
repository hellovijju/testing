import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

    pages = [
      {
        title: 'Main',
        url: 'menu/main',
        icon: 'home'
      },
      {
        title: 'submenu',
        children:[
          {
            title: 'my-orders',
            url: 'menu/my-orders',
            icon: 'home'
          },
          {
            title: 'settings',
            url: 'menu/settings',
            icon: 'home'
          }
        ]
      }
    ];

  constructor() { }

  ngOnInit() {
  }

}
