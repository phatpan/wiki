import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AddWikiComponent } from './add-wiki/add-wiki.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: 'addWiki', component: AddWikiComponent},
    {path: 'editWiki/:id', component: AddWikiComponent},
    {path: 'home', component: HomeComponent},
    {path: '', component: LoginComponent},
    {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}