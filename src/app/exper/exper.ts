import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exper',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './exper.html',
  styleUrl: './exper.css',
})
export class Exper {
  @Input() flag!: boolean;

  work = "Student at Elmore High School";
  comp1 = "Regularly found myself in various situations";
  comp2 = "Solved unconventional problems";
  comp3 = "Worked as part of team with Darwin";
  j1 = "Sales clerk";
  j2 = "Delivery person";
  j3 = "Hero of the day";
}