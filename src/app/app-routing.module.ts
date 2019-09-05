import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AproposComponent } from './components/apropos/apropos.component';
import { ProductComponent } from './components/product/product.component';
import { PanierComponent } from './components/panier/panier.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'apropos',
        component: AproposComponent
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'panier',
        component: PanierComponent
    }, {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }