import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {
  count: number;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPokemon()
    .subscribe(data => {
      this.count = Math.round(data.count/32)
      var page:number[] = new Array(this.count)
      for(var i = 1; i < page.length+1; i++){
        console.log(i);
      }
    });
    }

}
