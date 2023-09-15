import { Component } from '@angular/core';
import { count } from 'rxjs';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count = 0
  dislikecount = 0
  // value = 0
  increment(){
    console.log('like pressed');
    this.count++;
   
  }

  decrement(){
    console.log('dislike pressed');
    this.dislikecount++;
    
  }

  get value(){
    return (this.count/(this.count+this.dislikecount))*100;
  }
  get show(){
    if(this.count - this.dislikecount >= 10){
    return true
  }else{
    return false
  }}
  
}
