import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gd-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  appointments:any[];
  currentDate:Number;
  appointmentTable:any[];

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
    this.appointmentTable = [
      {
        hour: 800,
        meeting: {}
      },
      {
        hour: 830,
        meeting: {}
      },
      {
        hour: 900,
        meeting: {
          "date": "Today",
          "time": 900,
          "patient": "Joanna Nowak",
          "visit": "Pierwsza",
          "duration": 3,
          "cost": 150
        }
      },
      {
        hour: 930,
        meeting: {}
      },
      {
        hour: 1000,
        meeting: {}
      },
      {
        hour: 1030,
        meeting: {}
      },
      {
        hour: 1100,
        meeting: {}
      },
      {
        hour: 1130,
        meeting: {}
      },
      {
        hour: 1200,
        meeting: {}
      },
      {
        hour: 1230,
        meeting: {}
      },
      {
        hour: 1300,
        meeting: {}
      },
      {
        hour: 1330,
        meeting: {
          "date": "Today",  
          "patient": "Jan Kowalski",
          "visit": "Kontrolna",
          "duration": 2,
          "cost": 100
        }
      },
      {
        hour: 1400,
        meeting: {}
      },
      {
        hour: 1430,
        meeting: {}
      },
      {
        hour: 1500,
        meeting: {}
      },
      {
        hour: 1530,
        meeting: {}
      },
      {
        hour: 1600,
        meeting: {}
      },
      {
        hour: 1630,
        meeting: {}
      },
      {
        hour: 1700,
        meeting: {}
      },
      {
        hour: 1730,
        meeting: {}
      },
      {
        hour: 1800,
        meeting: {}
      },
      {
        hour: 1830,
        meeting: {}
      },
      {
        hour: 1900,
        meeting: {}
      },
      {
        hour: 1930,
        meeting: {}
      },
    ]
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
    return 1;
  }
}
