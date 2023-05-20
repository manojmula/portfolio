import { Component } from '@angular/core';
import { CatFactsService } from '../services/cat-facts.service';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.css']
})
export class CatFactsComponent {

  catFactsAndImages : any = [];

  constructor(private catFactsService: CatFactsService) { }

  ngOnInit() {
    this.catFactsService.getCatFactsAndImages().subscribe(data => {
      this.catFactsAndImages = data;
    });
  }

}
