import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements OnInit {
  // to grab the content projected by ng content
  @ContentChildren(TabComponent) Tabs: QueryList<TabComponent> =
    new QueryList();

  ngAfterContentInit(): void {
    console.log(this.Tabs);
    const activeTabs = this.Tabs?.filter((tab) => tab.active);
    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.Tabs!.first);
    }
  }
  selectTab(tab: TabComponent) {
    this.Tabs?.forEach((tab) => (tab.active = false));
    tab.active = true;
    return false; // to prevent the default behavior of redirecting to different page
  }

  constructor() {}

  ngOnInit(): void {}
}
