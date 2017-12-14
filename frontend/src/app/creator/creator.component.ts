import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';


@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  powers:any;
  current_name:string = "";

  constructor(public list:ListService) {
    this.powers = [];
    this.current_name = this.powers[this.powers.length - 1] || "";
  }

  add (item) {
    this.powers.push(item);
    this.current_name = item
  }

  ngOnInit() {
    this.list.getLists()
      .subscribe(data => this.powers = data)
  }

  dataChange(e) {
    this.powers[e.index] = e.data;
  }

}
