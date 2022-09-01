import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'atividade_pweb';
  public form!: FormGroup;
  public idades: any = [
    {
      idade: 16,
      valor: 1
    },
    {
      idade: 17,
      valor: 2
    },
    {
      idade: 18,
      valor: 3
    },
    {
      idade: 19,
      valor: 4
    },
    {
      idade: 20,
      valor: 5
    },
    {
      idade: 21,
      valor: 6
    },
    {
      idade: 22,
      valor: 7
    },
    {
      idade: 23,
      valor: 8
    }
  ]

  public interesses: any = [
    {
      nome: 'Cinema',
      valor: 1
    },
    {
      nome: 'Teatro',
      valor: 1
    },
    {
      nome: 'Luta',
      valor: 3
    },
    {
      nome: 'Futebol',
      valor: 4
    },
    {
      nome: 'Opera',
      valor: 5
    },
    {
      nome: 'Palestra',
      valor: 6
    },
    {
      nome: 'Passeio',
      valor: 7
    }
  ]

  public carros: any = [
    {
      nome: 'Volvo',
      valor: 1
    },
    {
      nome: 'Honda',
      valor: 2
    },
    {
      nome: 'Audi',
      valor: 3
    },
    {
      nome: 'Fiat',
      valor: 4
    },
    {
      nome: 'Ford',
      valor: 5
    },
    {
      nome: 'Kia',
      valor: 6
    },
    {
      nome: 'Nissan',
      valor: 7
    },
    {
      nome: 'BMW',
      valor: 8
    },
  ]

  public idolos: any = [
    {
      nome: 'Michael Jackson',
      valor: 1
    },
    {
      nome: 'Ronaldinho Gaucho',
      valor: 2
    }
  ]

  public enableSelect: boolean = true;

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
      img: [''],
      sexo: ['', Validators.required],
      hobbies: ['', Validators.required],
      termos: ['', Validators.required]
    })
  }

  public save() {
    alert(`Obrigadoo por responder o formulário ${this.form.controls['nome'].value}`)
  }

  public limparForm() {
    this.form?.reset()
  }
}
