import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable,} from 'rxjs';
import { IEvent } from '../interfaces/i-event';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private eventURL = `games`
 constructor(private http: HttpClient) { }

 getEventos(): Observable<IEvent[]>{
  return this.http.get<IEvent[]>(this.eventURL).pipe(
    map(response => response)
  )
 }

 insertarEvento(event:IEvent):Observable<IEvent>{
return this.http.post<IEvent>(this.eventURL,event).pipe(
  map(response=>response)
  )
 }

deleteEvento(id:number):Observable<number>{
  return this.http.delete<any>(this.eventURL+"/"+id).pipe(
    map(response=>response)
  );
 }
 eventoModificar(evento:IEvent, idEvent:number): Observable<IEvent>{
  return this.http.put<any>(this.eventURL+"/"+idEvent, evento).pipe(
    map(respuesta => respuesta)
  )
}

 /*modificarRating(idEvent:number,estrella:number):Observable<boolean>{
    return this.http.put<{ok:boolean,error?:string}>(this.eventURL+'/rating/'+idEvent,
  {rating:estrella})
  .pipe(map(resp=>{
    if(!resp) {return false;}
  return true;
  }
  ));
  }*/

  getEvents() {
    return [{
      id: 0,
      title: 'God of War: Ragnarok',
      descr: 'La continuación del galardonado GoW. Un juego donde esperamos nuevas aventuras de Kratos y El Chico, y conocer en más profundidad su relación con la mitología nórdica.',
      releaseDate: new Date('2022-07-15'),
      studio: 'SIE Santa Monica Studio',
      imageUrl: '/assets/gow.jpg',
      rating: 5
    }, {
      id: 1,
      title: 'The Witcher 3',
      descr: 'Uno de los mejores juegos que ha existido a lo largo de la historia.',
      releaseDate: new Date('2022-03-04'),
      studio: 'CD Projekt Red',
      imageUrl: '/assets/geralt.jpg',
      rating: 2
    }, {
      id: 2,
      title: 'The Last of Us 2',
      descr: 'El juego que arrebató a The Witcher 3 el título de juego más galardonado de la historia. ¿Merecido? ¡Descúbrelo!',
      releaseDate: new Date('2022-03-04'),
      studio: 'Naughty Dog',
      imageUrl: '/assets/ellie.jpg',
      rating: 2
    }]
  }


}
