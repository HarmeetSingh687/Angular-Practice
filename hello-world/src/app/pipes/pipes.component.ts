import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name="Harmeet";
  public message="Hello Everyone";
  public person={
    "firstName":"Harmeet",
    "lastName" : "Singh"
  }
  public date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
