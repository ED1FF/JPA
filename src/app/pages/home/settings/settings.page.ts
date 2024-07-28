import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  paletteToggle = false;

  constructor() {}

  ngOnInit() {
    console.log('Test');
  }
}
