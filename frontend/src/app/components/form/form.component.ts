import { Component, Output, EventEmitter } from '@angular/core';
import { LearnerserviceService } from 'src/services/learnerservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  task:string = ''

  @Output() stateChanged = new EventEmitter<any>();

  constructor(private service:LearnerserviceService){}

  onSubmit(){
    if(this.task!==''){
      this.service.insertData({task: this.task, status: false}).subscribe(data=>{
        console.log('Task Added')
        this.stateChanged.emit({changed:true})
        this.task = ''
      })
    }
  }
}
