import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactosComponent } from "./pages/contactos/contactos.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { NosotrosComponent } from "./pages/nosotros/nosotros.component";
import { ServiciosComponent } from "./pages/servicios/servicios.component";

const routes: Routes = [
    { path: "", component: InicioComponent },
    { path: "about", component: NosotrosComponent},
    { path: "contact", component: ContactosComponent},
    { path: "services", component: ServiciosComponent},
]
@NgModule({
   imports:[RouterModule.forRoot( routes ) ],
   exports: [RouterModule]
})
export class AppRoutingModule{}