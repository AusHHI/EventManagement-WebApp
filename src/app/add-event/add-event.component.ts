import { Component } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent  {
  eveName: string = '';
  eveAddress :string = '';
  

  addEvent(){
    alert("Thanks for creating event.Data:"+JSON.stringify(this.eveName));
  }



//}

}
