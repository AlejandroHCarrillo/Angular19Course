import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Alejandro',
  gender: 'Male',
  age: 30,
  email: 'client1@example.com',
  address: '123 Main St, Anytown, USA'
};

const client2 = {
  name: 'Malicia',
  gender: 'Female',
  age: 25,
  email: 'client2@example.com',
  address: '456 Elm St, Anytown, USA'
};

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe, AsyncPipe, ],
  templateUrl: './uncommon-page.component.html',
  styles: ``
})

export default class UncommonPageComponent {
//  i18nSelect
  client = signal(client2);
  EstimadoMap = {
    Male: 'Estimado',
    Female: 'Estimada'
  };

  invitationMap = {
    Male: 'invitarlo',
    Female: 'invitarla'
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);    
  }
clientsArray =[
    'John',
    'Jane',
    'Sophia',
    'Smith',
    'Alicia',
    'Bob',
    'Charlie'

  ];
  // i18nPlural
  clients = signal<string[]>([...this.clientsArray]);
  
  clientsMap = signal({
    '=0': 'no tenemos clientes atendiendo',
    '=1': 'tenemos un cliente atendiendo',
    'other': 'tenemos # clientes atendiendo'
  });

  removeClient() {
    // this.clients.update(clients => clients.slice(0, clients.length - 1)); // quita del final 
    this.clients.update(clients => clients.slice(1, clients.length)); // quita del principio
  }
  addClient() {
    var num = this.clients().length + 1;
    this.clients.update(clients => [...clients, `Nuevo Cliente ${num}`]);
  }

  // keyValue pipe

  profile = {
  name: 'Alejandro',
  age: 30,
  address: '123 Main St, Anytown, USA'
  }

  // async pipe

  promiseValue : Promise<string> = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('Ya hay valor de la promesa');
              // console.log('Valor de la promesa resuelto');
            }, 3500);
          });

  myObservable = interval(2000).pipe(
    map((value) => value + 1),
    // tap((value) => console.log('Ya hay valor del observable', value))
  );

}

