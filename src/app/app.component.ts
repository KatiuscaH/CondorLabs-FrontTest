import { Component } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  callParams: any = {};
  data : any;
  title = 'app';
  dateActual = new Date();
  constructor(private api: AppService){
    this.api.actual(((this.dateActual.getMonth() < 10) ? ("0"+(this.dateActual.getMonth() + 1) ) : (this.dateActual.getMonth()+1)) +"/"+((this.dateActual.getDate() < 10) ? ("0"+(this.dateActual.getDate()) ) : (this.dateActual.getDate()) )+"/"+(this.dateActual.getFullYear()))
    .subscribe((response)=>{
      console.log("Data =>", response);
      this.data = response;
    }),
    error => {
      console.log('error', error);

    }
    
  }

  /* private convertStringDateToTime(_date) {
    const date = new Date(_date);
    const localOffset = date.getTimezoneOffset() * 60000;
    const utc = date.getTime() + localOffset;
    return utc;
  } */

   call(){
     this.api.call(this.callParams.start.split("-")[1]+"/"+this.callParams.start.split("-")[2]+"/"+this.callParams.start.split("-")[0], this.callParams.end.split("-")[1]+"/"+this.callParams.end.split("-")[2]+"/"+this.callParams.end.split("-")[0], this.callParams.code)
     .subscribe((response)=>{
       this.data = response;
     })
   } 
}
