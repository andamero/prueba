import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { FligthService } from './services/fligth.service';
import { error } from 'console';


@Component({
  selector: 'app-colavorador',
  templateUrl: './colavorador.component.html',
  styleUrl: './colavorador.component.css'
})
export class ColavoradorComponent {
[x: string]: any;
  fligthCtrl = new FormGroup({
    Origen: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(4)],
    }),
    Destino: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(4)],
    }),
    Fecha_de_salida: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)],
    }),
    Fecha_de_llegada: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)],
    }),
    Aerolinea: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    Precio: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(5)],
    }),
    Puestos: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(1)],
    }),

  });
reservas: any;

  constructor(
    private fligthSrv: FligthService
  ) { }

  addFlithg() {
    if (this.fligthCtrl.valid) {
      console.log(this.fligthCtrl.value);
      this.fligthSrv.guardarFligth(this.fligthCtrl.value)
        .subscribe(
          resp => {
            console.log('se guardo con exito');
          },
          error => {
            console.log('Error al guardar');
          }
        )
    }

  }

  


}
