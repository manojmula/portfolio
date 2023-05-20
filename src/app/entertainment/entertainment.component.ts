import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  apis = ['https://api.imgflip.com/get_memes'];
  data : any = [];
  currentSlide = 0;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.apis.forEach(api => {
      this.http.get(api).subscribe((response : any) => {
        this.data = response.data.memes ;
      });
    });

    interval(2000)
      .pipe(startWith(0), switchMap(() => this.data))
      .subscribe(() => {
        this.currentSlide = (this.currentSlide + 1) % this.data.length;
      });
  }
}
