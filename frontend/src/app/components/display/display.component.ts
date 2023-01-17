import { Component, OnInit } from '@angular/core';
import { LearnerserviceService } from 'src/services/learnerservice.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  
    displayData:any = []
    loading = true

    constructor(private service:LearnerserviceService){}

    stateChanged(e:any){
      console.log(e)
      this.refreshData()
    }

    refreshData(){
      this.service.getAllData().subscribe(data=>{
        console.log(data)
        this.displayData = data
        this.loading = false
      })
    }

    ngOnInit(){
      this.refreshData()
    }

}
