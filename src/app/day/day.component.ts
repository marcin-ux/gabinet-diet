import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gd-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  appointments:any[];
  currentDate:Number;

  constructor() {
  }

  ngOnInit() {
    this.appointments = [
      {
        "date": "Today",  
        "time": 1330,
        "patient": "Jan Kowalski",
        "visit": "Kontrolna",
        "duration": 2,
        "cost": 100
      },
      {
        "date": "Today",
        "time": 900,
        "patient": "Joanna Nowak",
        "visit": "Pierwsza",
        "duration": 3,
        "cost": 150
        }
    ];
    this.currentDate = Date.now();
  } 


  timetable:number[] = [
    800, 830, 900, 930, 1000, 1030, 1100, 1130, 1200, 1230, 1300, 1330, 1400, 1430, 1500, 1530, 1600, 1630, 1700, 1730, 1800, 1830, 1900, 1930
  ];

  checkApp(hour) {
    for(let app of this.appointments) {
      if (hour == app.time) {
        return true;
      }
    }
    return false;
  }

  checkDuration(hour) {
    console.log("Checking");
    return 2;
  }
}
