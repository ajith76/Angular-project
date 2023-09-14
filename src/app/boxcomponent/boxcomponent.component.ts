import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-boxcomponent',
  templateUrl: './boxcomponent.component.html',
  styleUrls: ['./boxcomponent.component.css']
})
export class BoxcomponentComponent {
  @Input() clr : string = '';
}
