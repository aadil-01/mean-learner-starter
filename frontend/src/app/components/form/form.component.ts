import { Component } from '@angular/core';
import { LearnerserviceService } from 'src/services/learnerservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  task:string = ''

  constructor(private service:LearnerserviceService){}

  onSubmit(){
    if(this.task!==''){
      this.service.insertData({task: this.task, status: false}).subscribe(data=>{
        console.log('Task Added')
        this.task = ''
      })
    }
  }
}
