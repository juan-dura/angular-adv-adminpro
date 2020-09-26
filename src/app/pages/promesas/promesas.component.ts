import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsarios().then( usuarios => console.log(usuarios));

    // const promesa = new Promise((resolve, reject) => {
    //   if (false) {
    //     resolve('Hola mundo');
    //   } else {
    //     reject('Algo salió mal');
    //   }
    // });

    // promesa.then((mensaje) => {
    //   console.log(mensaje)
    // })
    // .catch( error => console.log('Error de mi promesa: ', error));

    // console.log('Fin del init');

  }

  getUsarios() {
    return new Promise(resolve => {
      fetch('https://reqres.in/api/users?page=2')
      .then(resp => resp.json())
      .then( body => resolve(body.data))
    });
  }

}
