import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { EventosService } from '../../services/eventos.service';


@Component({
  selector: 'event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.css']
})
export class EventNewComponent implements OnInit{


  newEvent!: IEvent;
  events: IEvent[] = [];
  constructor(private evServices:EventosService) {}

  ngOnInit(){
    this.events = this.evServices.getEvents();
    this.inicializarEvento();
  }

  @Output() grabarEvento = new EventEmitter<IEvent>();

  addEvent(){
    this.grabarEvento.emit(this.newEvent);
    this.inicializarEvento()
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      this.newEvent.imageUrl = reader.result as string;
      console.log(e);
    });
  }

  private inicializarEvento(){
    this.newEvent=
    {id: 0,title:'', releaseDate:new Date(""), descr:'', studio: '', imageUrl: "", rating: 0,};
  }

}
