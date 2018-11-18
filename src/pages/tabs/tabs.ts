import { Component } from '@angular/core';

import { SharePage } from '../share/share';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SharePage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
