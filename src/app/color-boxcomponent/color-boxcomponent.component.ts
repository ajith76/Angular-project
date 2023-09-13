import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-color-boxcomponent',
  templateUrl: './color-boxcomponent.component.html',
  styleUrls: ['./color-boxcomponent.component.css']
})
export class ColorBoxcomponentComponent {
  @Input() clr  = 'pink';
  updateclr(event : any){
    this.clr = event.target.value;
    
  }
}
