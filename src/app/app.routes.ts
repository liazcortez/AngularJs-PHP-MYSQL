import { RouterModule, Routes } from '@angular/router';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { FiltroComponent } from './components/filtro/filtro.component';


const APP_ROUTES: Routes = [
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'cuerpo', component: CuerpoComponent },
    {path:'filtro/:termino',component:FiltroComponent},
    { path: 'home', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
