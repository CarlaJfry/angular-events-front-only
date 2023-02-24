import { Component, OnInit } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { EventosService } from '../../services/eventos.service';


@Component({
  selector: 'events-show',
  templateUrl: './events-show.component.html',
  styleUrls: ['./events-show.component.css']
})

export class EventsShowComponent implements OnInit {
  isColor = true;
  desplegable = "";
  showImage = true;
  esFondoRojo = true;
  esFondoAzul = false;
  studioExists = false;
  showForm = false;

  events: IEvent[] = [];
  studios: string[] = [];

  constructor(private evServices: EventosService) { }

  toggle() {
    this.showForm = !this.showForm;
  }

  ngOnInit() {
    this.events = this.evServices.getEvents();

    this.evServices.getEventos().subscribe({
      next: evs => { console.log(evs); this.events = evs },
      error: (error: unknown) => console.error(error),
      complete: () => console.log("Consulta realizada correctamente")
    });

    for (let i = 0; i < this.events.length; i++) { //el filtro de estudio
      this.studioExists = false;
      for (let j = 0; j < this.studios.length; j++) {
        if (this.studios[j] == this.events[i].studio) {
          this.studioExists = true;
        }
      }
      if (this.studioExists == false) {
        this.studios.push(this.events[i].studio);
      }
    }
  }

  /*cambiarFondo(){
    if (this.desplegable == "red") {
    this.esFondoRojo=true;
    this.esFondoAzul=false;
    } else {
      this.esFondoRojo=false;
      this.esFondoAzul=true;
    }
  }*/

  search = "";
  estudio = "";

  orderDate() {
    this.events.sort((e1, e2) => e1.releaseDate.getTime() - e2.releaseDate.getTime());
  }
  /*orderPrice(){
    this.events.sort((e1,e2)=>e1.price-e2.price);
  }*/


  eliminarEvento(even: IEvent) {
    this.events = this.events.filter(eventoPorElQueVa => eventoPorElQueVa != even);
  }

  insertarEvento(even: IEvent) {
    this.events.push(even);
    this.studios.push(even.studio);
  }



}


