import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimalService } from 'src/app/shared/services/animal.service';
import { ValidateAllFormFields } from 'src/app/shared/validators/validate-all-form-field';

@Component({
  selector: 'app-cadastro-animais',
  templateUrl: './cadastro-animais.component.html',
  styleUrls: ['./cadastro-animais.component.scss']
})
export class CadastroAnimaisComponent implements OnInit {

  displayedColumns: string[] = ['Manejo', 'Tag', 'Acoes'];

  public animais = [];
  private validator = new ValidateAllFormFields();

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private animalService: AnimalService) { }

  ngOnInit() {
    this.createForm();
    this.getAll();
  }

  private initializeForm() {
    return new FormGroup({
      manejo: new FormControl('', Validators.required),
      tag: new FormControl('', Validators.required)
    }).controls;
  }

  public createForm() {
    this.form = this.fb.group(this.initializeForm());
  }

  private getAll() {
    this.animalService.getAll().toPromise().then(res => {
      if (res) {
        this.animais = res;
      }
    });
  }

  public onSubmit() {
    if (this.form.valid) {
      this.animalService.create(this.form.value).toPromise().then(res => {
        if (res.status === 200) {
          this.getAll();
          this.form.reset();
        }
      });
    } else {
      this.validator.validate(this.form);
    }
  }

  public onDelete(animal) {
    if (animal) {
      this.animalService.delete(animal.id).toPromise().then(res => {
        if (res.status === 200) {
          this.getAll();
        }
      })
    }
  }
}
