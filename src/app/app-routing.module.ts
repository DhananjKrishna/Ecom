import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'categories',component:CategoriesComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'faq',component:FaqComponent},
  {path: 'login',component:LoginComponent},
  {path: 'cart',component:CartComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'password',component:PasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
