import { Component, OnInit } from '@angular/core';
import { TABS } from '../../constants/navigation-tabs';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { NavigationTab } from '../../models/navigation-tabs.type';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterLink, DropdownModule, FormsModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent implements OnInit {
  tabs!: NavigationTab[];
  selectedTab!: NavigationTab;
  isDropdownOpen!: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    try {
      this.isDropdownOpen = false;
      this.tabs = TABS;
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.selectedTab = this.tabs.find(tab => tab.url === event.urlAfterRedirects) as NavigationTab;
        }
      });
    } catch (error) {
      console.log('Exception occured in app-navigation-bar while runnig through ngOnInit() =>', error);

    }
  }

  onDropdownToggle(): void {
    try {
      this.isDropdownOpen = !this.isDropdownOpen;
    } catch (error) {
      console.log('Exception occured in app-navigation-bar while runnig through onDropdownToggle()=>', error);
    }
  }

  onTabChange(): void {
    try {
      this.router.navigate([this.selectedTab?.url as string]);
    } catch (error) {
      console.log('Exception occured in app-navigation-bar while runnig through onTabChange()=>', error);
    }
  }
}
