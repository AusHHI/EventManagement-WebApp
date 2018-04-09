import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/event';
import { EventFut } from '../shared/event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: Event[] = [
    {
      id : 1,
      name : 'Birthday Party',
      image : '../assets/images/3.jpg',
      description :'Happy Birthday cards,decorations,gifts,food and many more.',
      dateStarted : '01/01/2016',
      dateEnd : '02/01/2016',
      rate : 3.6
    },
    {
      id : 2,
      name : 'Conference',
      image : '../assets/images/1.jpg',
      description :'All Buisness Meets.',
      dateStarted : '01/01/2018',
      dateEnd : '02/01/2018',
      rate : 4.0
    }];
      eventFuts: EventFut[] = [
    {
      id : 3,
      name : 'Wedding',
      image : '../assets/images/2.jpg',
      description :'Gifts ,decoration, Rum and food.',
      dateStarted : '01/03/2019'


    },
    {
      id : 4,
      name : 'Festivals',
      image : '../assets/images/4.jpg',
      description :'Get together,wishes,decorations,gifts,food and many more.',
      dateStarted : '01/01/2019'
    }

  ]


  constructor() { }

  ngOnInit() {
  }

}
