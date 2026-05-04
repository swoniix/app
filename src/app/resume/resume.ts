import { Component } from '@angular/core';
import { Exper } from '../exper/exper';
import { Links } from '../links/links';

@Component({
  selector: 'app-resume',
  imports: [Exper,Links],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {
  fullname = "Gumball Watterson"
  phone = '+1 (555) 123-ELMORE'
  city = "Elmore, USA"
  email = "gumball@elmoreschool.com"
  aboutMe = "An energetic and creative student with an unconventional mindset. I easily find adventure even where there isn’t any. I have a strong ability to improvise and am resilient in the face of the consequences of my own decisions."
}
