import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { ProdutoDetalhePage } from './produto-detalhe';

@NgModule({
  declarations: [
    ProdutoDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutoDetalhePage),
  ],
})
export class ProdutoDetalhePageModule {}
