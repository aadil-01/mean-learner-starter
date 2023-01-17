import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LearnerserviceService } from 'src/services/learnerservice.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent {
  
  @Input() cardData:any;

  @Output() stateChanged = new EventEmitter<any>();

  loading = false

  constructor(private service:LearnerserviceService){}

  onDelete(){
    this.loading = true
    this.service.deleteData(this.cardData._id).subscribe(data=>{
      console.log('deleted')
      this.loading = false
      this.stateChanged.emit({changed:true})
    })
  }

  onDone(){
    this.loading = true
    this.service.updateData(this.cardData._id,{task:this.cardData.task,status:true}).subscribe(data=>{
      console.log('Done')
      this.loading = false
      this.stateChanged.emit({changed:true})
    })
  }
}
