import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';

//localhost:4299/heroes/''
const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children: [
      {
        path:'new-hero',
        component: NewPageComponent
      },
      {
        path:'search',
        component: SearchPageComponent
      },
      {
        path:'edit/:id',
        component: NewPageComponent
      },
      {
        path:'list',
        component: ListPageComponent
      },
      {
        path:':id',//ojo con este ':id' debe ir al final, si va de los primeros va a capturar el id de cualquiera otra ruta y no se mostrara
        component: HeroPageComponent
      },
      {
        path:'**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
