import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atividade_pweb';
  form!: FormGroup;

  constructor(
    private formBuild: FormBuilder,
  ){}

  ngOnInit() {
    this.montaForm()
  }

  private montaForm() {
    this.form = this.formBuild.group({
      nome: ['', Validators.required],
      bio: ['', Validators.required],
      planeta: ['', Validators.required],
      cupom: [''],
      img: ['']
    })
  }

  public save() {
    console.log(this.form?.value)
  }

  public limpaForm() {
    this.form?.reset()
  }
}
