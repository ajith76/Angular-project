import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  @Input() movieposters = ''
  @Input() lefts = 'Neethane En Ponvasantam'
  @Input() rights = '5⭐'
  @Input() descriptions = 'Neethaane En Ponvasantham tells the love story of Varun (Jiiva) and Nithya (Samantha) through three stages of their life; their school days, college life and then in their late twenties. The film was released on 14 December 2012, receiving positive to mixed reviews from critics, before enduring a good run at the box office.'
}
