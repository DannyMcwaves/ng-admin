import { Component, OnInit, Input, HostListener, EventEmitter, Output } from '@angular/core';
import {ListService} from "../list.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public lists:ListService) { }

  edit = false;

  @Output() dataChange = new EventEmitter();

  @Input() data:string;

  @Input() index:number;

  @HostListener('click') onClick() {
    this.edit = true;
  }

  ngOnInit() {
  }

  getData(event) {
    event.preventDefault();
    this.edit = false;
    this.data = event.target.textContent.trim();
    this.dataChange.emit({index: this.index, data: this.data });
  }

}
