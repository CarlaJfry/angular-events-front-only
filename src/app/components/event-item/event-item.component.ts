import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit{
  altura=256.65;
  // color="blue";
  subrayado= "underline";
  esFondoRojo=true;
  esFondoAzul=false;
  search="";
  desplegable = "";

  @Input() event!:IEvent;
  @Input() index!:number;
  @Input() cssRojo!:boolean;
  @Input() cssAzul!:boolean;
  @Input() showImage!:boolean;

  changeRating(rating: number) {
    this.event.rating = rating;
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
  newEvent!: IEvent;
  events:IEvent[] = [];
  constructor(private evServices:EventosService) {}

  ngOnInit(){
    this.events = this.evServices.getEvents();
    this.inicializarEvento();
  }

  // newEvent!: IEvent;

  addEvent(){
    this.events.push(this.newEvent);
    this.inicializarEvento()
  }

  private inicializarEvento(){
    this.newEvent=
    {id: 0, title:'', releaseDate:new Date(""), descr:'', studio: '', imageUrl: "", rating: 0,};
  }

  eventAdd() {
    const form:HTMLFormElement = <HTMLFormElement>document.getElementById("formEventAdd");
    form['visible'] = true;
  }

  @Output() borrarEvento = new EventEmitter<void>();



  deleteEvent() {
  this.borrarEvento.emit();

   this.evServices.deleteEvento(<number>this.event.id).subscribe({
      next:id=>{
        console.log("El evento eliminado es "+id);
        this.borrarEvento.emit();
      },
      error:(error: any)=>console.error(error)
    })
  }

}

