import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AddWikiComponent } from './add-wiki/add-wiki.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: 'addWiki', component: AddWikiComponent},
    {path: '', component: HomeComponent},
    {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}