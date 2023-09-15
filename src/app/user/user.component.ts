import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() name ="Ajith"
  @Input() profile = "https://www.pinkvilla.com/images/2023-07/755764970_ajith-thunivu-1280-min.jpg"
}
