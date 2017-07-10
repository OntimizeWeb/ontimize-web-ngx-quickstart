import {
  // OnInit,
  ViewEncapsulation,
  Injector,
  Component
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {
  AppMenuService,
  MenuRootItem,
  MenuGroup,
  MenuItemRoute
} from 'ontimize-web-ng2';

const MENU_GROUP_RENDER_CARDS = ['views'];

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent {

  appMenuService: AppMenuService;
  menuGroups: MenuRootItem[];
  cardItems: MenuRootItem[];

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private injector: Injector
  ) {
    this.appMenuService = this.injector.get(AppMenuService);
    this.menuGroups = this.appMenuService.getMenuRoots();

    let cardItemsAux = [];
    for (let i = 0, len = this.menuGroups.length; i < len; i++) {
      if (MENU_GROUP_RENDER_CARDS.indexOf(this.menuGroups[i].id) !== -1) {
        cardItemsAux = cardItemsAux.concat((this.menuGroups[i] as MenuGroup).items);
      }
    }
    this.cardItems = cardItemsAux;

  }

  goToItemModule(item: MenuItemRoute) {
    this.router.navigate([item.route], {
      relativeTo: this.actRoute
    });
  }
}
