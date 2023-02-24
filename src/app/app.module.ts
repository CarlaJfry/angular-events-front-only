import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EventFilterPipe } from './pipes/event-filter.pipe';
import { EventItemComponent } from './components/event-item/event-item.component';
import { EventNewComponent } from './components/event-new/event-new.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { EventNewPageComponent } from './components/event-new-page/event-new-page.component';
import { StudioFilterPipe } from './pipes/studio-filter.pipe';
import { EventsShowComponent } from './components/events-show/events-show.component';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    EventsShowComponent,
    EventFilterPipe,
    EventItemComponent,
    EventNewComponent,
    StarRatingComponent,
    EventNewPageComponent,
    StudioFilterPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
   ],

  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: BaseUrlInterceptor,
    multi: true,

}],
  bootstrap: [AppComponent]
})
export class AppModule { }
