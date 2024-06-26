import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit() {
    // get all active tabs and if there is no active tab set, activate the first
    const activeTabs = this.tabs.filter(tab => (tab.active));
    if (this.tabs.length > 0 && activeTabs.length === 0) this.selectTab(this.tabs.first);
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => (tab.active = false));
    // activate the tab the user has clicked on.
    tab.active = true;
  }
}
