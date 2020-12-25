import { Component } from '@angular/core';
import { Console } from 'console';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['Angualar','React','Vue'];
  topichasError=true;
  submitted=false;
  errormsg='';

  userModel= new User('Rob','rob@test.com', '55234242' ,'default','morning','true');

  constructor(private _enrollmentService: EnrollmentService){}

  validateTopic(value){
    if(value=='default'){
      this.topichasError=true;
    }
    else{
      this.topichasError=false;
    }
  }

  onSubmit(){
      this.submitted=true;
      this._enrollmentService.enroll(this.userModel).subscribe(
        data => console.log("Success!", data),
        error => this.errormsg = error.statusText
        )    
  }
}
