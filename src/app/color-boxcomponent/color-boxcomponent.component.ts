import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-color-boxcomponent',
  templateUrl: './color-boxcomponent.component.html',
  styleUrls: ['./color-boxcomponent.component.css']
})
export class ColorBoxcomponentComponent {
  @Input() clr  = 'pink';
  colorList = ['red','pink','orange'];
  updateclr(event : any){
    this.clr = event.target.value;
    
  }
  addcolor(){
    this.colorList.push(this.clr);
    console.log('adding.......')
  }
}
