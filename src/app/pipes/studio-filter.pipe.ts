import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Pipe({
  name: 'studioFilter'
})
export class StudioFilterPipe implements PipeTransform {

  transform(events: IEvent[], filterBy:string): IEvent[] {
    if (filterBy!="default"){
      const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filter ?
    events.filter(event => event.studio.toLocaleLowerCase() == (filter)) : events;
    }else{
      return events;
    }
  }

  }
