import { ProductService } from './product.service';
import { ProductGuardService } from './product-guard.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './../shared/star.component';
import { ConvertToSpacesPipe } from './../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id',
        canActivate: [ProductGuardService],
        component: ProductDetailComponent},
    ]),
    SharedModule
  ],
  declarations: [ProductListComponent,
                ProductDetailComponent,
                ConvertToSpacesPipe],
  providers: [ ProductService,
    ProductGuardService],
})
export class ProductModule { }
