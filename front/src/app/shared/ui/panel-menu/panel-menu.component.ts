import {
    Component,
  } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "app/utilisator/data-access/AuthService";
import { MenuItem } from "primeng/api";
  import { PanelMenuModule } from 'primeng/panelmenu';
import { Subscription } from "rxjs";
  
  @Component({
    selector: "app-panel-menu",
    standalone: true,
    imports: [PanelMenuModule],
    template: `
        <p-panelMenu [model]="items" styleClass="w-full" />
    `
  })
  export class PanelMenuComponent {

    public items: MenuItem[] = []
    private authSubscription!: Subscription;

    constructor(private authService: AuthService, private router : Router) {}
    
    ngOnInit(){
      this.authSubscription = this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
        this.updateMenuItems(isLoggedIn);
      });
    }

    updateMenuItems(isLoggedIn: boolean){
      this.items = [
        {
            label: 'Accueil',
            icon: 'pi pi-home',
            routerLink: ['/home']
        },
        {
            label: 'Produits',
            icon: 'pi pi-barcode',
            routerLink: isLoggedIn ? ['/products/list'] : ['/login']
        },
        {
          label: 'Déconnexion',
          icon: 'pi pi-power-off',
          command: () => this.logoutAndNavigate(),
        },
    ]
    }

    logoutAndNavigate() {
      this.authService.logout();
      this.router.navigate(['/home']);
    }

    ngOnDestroy() {
      if (this.authSubscription) {
        this.authSubscription.unsubscribe();
      }
    }
  }
  