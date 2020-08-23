import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @Input() child_name : string;
  constructor() { }

  ngOnInit(): void {
  }
  allocated = {
    "parent_name" : "",
    "child_names" : ""
  }

}
