import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { FligthService } from '../colavorador/services/fligth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent {


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

 

  constructor(
    private fligthSrv: FligthService
  ) { }

  realizarBusqueda() {
    const { Origen, Aerolinea , Destino,Fecha_de_salida,Fecha_de_llegada,Precio,Puestos } = this.fligthCtrl.value;
    let parametrosDeBusqueda:any = {};
  
    if (Origen?.length !== 0) {
      parametrosDeBusqueda['Origen'] = Origen;
    }
  
    if (Aerolinea?.length !== 0) {
      parametrosDeBusqueda['Aerolinea'] = Aerolinea;
    }
  
    if (Destino?.length !== 0) {
      parametrosDeBusqueda['Destino'] = Destino;
    }

    if (Fecha_de_salida?.length !== 0) {
      parametrosDeBusqueda['Fecha_de_salida'] = Fecha_de_salida;
    }

    if (Fecha_de_llegada?.length !== 0) {
      parametrosDeBusqueda['Fecha_de_llegada'] = Fecha_de_llegada;
    }

    if (Precio?.length !== 0) {
      parametrosDeBusqueda['Precio'] = Precio;
    }

    if (Puestos?.length !== 0) {
      parametrosDeBusqueda['Fecha_de_salida'] = Fecha_de_salida;
    }
  
    this.fligthSrv.buscar(parametrosDeBusqueda)
      .subscribe(
        resultados => {
          console.log(resultados); // Manejar los resultados aquí
        },
        error => {
          console.error(error); // Manejar el error aquí
        }
      );
    

  }


}




