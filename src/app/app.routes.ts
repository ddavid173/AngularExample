import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ContactComponent } from './components/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent}
];
