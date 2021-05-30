import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessaggesService {
  constructor() {}

  mensajes = [
    {
      id: 1,
      titulo: 'Test mensaje 1',
      mensaje:
        'Magna dolore ipsum sit occaecat labore ex elit nulla culpa ad exercitation reprehenderit.',
      remitente: 'Irure amet',
      time: new Date(),
    },
    {
      id: 2,
      titulo: 'Test Mensaje 2',
      mensaje:
        'Ma sit labore ex elit nulla culpa ad exercitation reprehenderit.',
      remitente: 'irure amet',
      time: new Date(),
    },
    {
      id: 3,
      titulo: 'Test mensaje N.3',
      mensaje: 'ex elit nulla culpa ad.',
      remitente: 'amet',
      time: new Date(),
    },
    {
      id: 4,
      titulo: 'Test mensaje IV',
      mensaje: 'afed exercitation reprehenderit.',
      remitente: 'Irure irure',
      time: new Date(),
    },
    {
      id: 5,
      titulo: 'Test mensaje cinco',
      mensaje:
        'occaecat labore ex elit nulla culpa ad exercitation reprehenderit.',
      remitente: 'I. amet',
      time: new Date(),
    },
  ];

  getMensajes() {
    return this.mensajes;
  }
}