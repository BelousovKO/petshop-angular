import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, takeUntil, tap} from "rxjs/operators";
import {DestroyService} from "../../../services";

enum Devise {
  Desktop = 'desktop',
  Table = 'table'
}

const MOBILE = 640;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  providers: [DestroyService],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private destroy$: DestroyService) {
    router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      tap(() => {
          this.routerTitle = route.firstChild?.snapshot.data.title;
        }
      ),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  @HostListener('window:resize')
  onResize() {
    if (this.typeDevise === Devise.Desktop && window.innerWidth < MOBILE) {
      this.typeDevise = Devise.Table
    }
    if (this.typeDevise === Devise.Table && window.innerWidth >= MOBILE) {
      this.typeDevise = Devise.Desktop
      if (this.routerTitle === 'menu') {
        this.router.navigate(['/catalog'])
      }
    }
  }

  typeDevise = Devise.Desktop;
  boxNavigation = "Корзина";
  routerTitle: string | undefined;

  ngOnInit(): void {
    this.typeDevise = window.innerWidth >= MOBILE ? Devise.Desktop : Devise.Table;
  }

  isDesktop(): boolean {
    return this.typeDevise === Devise.Desktop;
  }

  isShowButtonInMenu(): boolean {
    return !this.isDesktop() && this.routerTitle !== 'menu';
  }

  isSowButtonOutMenu(): boolean {
    return this.routerTitle === 'menu' && !this.isDesktop();
  }
}
