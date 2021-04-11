import { NgModule } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { CadastroAnimaisComponent } from './cadastro-animais.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@NgModule({
  declarations: [CadastroAnimaisComponent],
  imports: [AppModule,
    MatTableModule,
    ToastrModule,
    MatIconModule],
  exports: [CadastroAnimaisComponent],
  providers: [ToastrService]
})

export class CadastroAnimaisModule { }
