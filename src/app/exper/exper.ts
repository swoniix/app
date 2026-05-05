import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-exper',
  imports: [],
  templateUrl: './exper.html',
  styleUrl: './exper.css',
})
export class Exper {
  @Input() flag!: boolean;
  work = " Student at Elmore High School"
  comp1 = "Regulary found myself in various situations"
  comp2 = "Solved unconveventional problems"
  comp3 = "Worked as part of team with Darwin"
  j1 = "Sales clerk"
  j2 = "Delivery person"
  j3 = "Hero of the day"
}
