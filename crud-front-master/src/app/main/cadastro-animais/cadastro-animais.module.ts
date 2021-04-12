import { NgModule } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { CadastroAnimaisComponent } from './cadastro-animais.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material';


@NgModule({
  declarations: [CadastroAnimaisComponent],
  imports: [
    AppModule,
    MatTableModule,
    MatIconModule
  ],
  exports: [CadastroAnimaisComponent]
})

export class CadastroAnimaisModule { }
