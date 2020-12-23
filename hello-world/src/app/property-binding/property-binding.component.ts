import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public myid="PB_id";
  public sec_myid="Second";
  public third_myid="third";
  public isdisable="true";
  constructor() { }

  ngOnInit(): void {
  }

}
