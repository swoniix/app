import { Component } from '@angular/core';
import { Links } from '../links/links';

@Component({
  selector: 'app-exper',
  imports: [Links],
  templateUrl: './exper.html',
  styleUrl: './exper.css',
})
export class Exper {
  work = " Student at Elmore High School"
  comp1 ="Regulary found myself in various situations"
  comp2 ="Solved unconveventional problems"
  comp3 = "Worked as part of team with Darwin"
  j1 = "Sales clerk"
  j2="Delivery person"
  j3="Hero of the day"
}
