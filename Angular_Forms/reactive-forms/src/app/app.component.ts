import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from './shared/password.validator';
import {forbiddenNameValidator} from './shared/user-name.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registrationForm: any;

  constructor(private fb: FormBuilder){}

  get email(){
    return this.registrationForm.get('email');
  }

  get Alternativeemail(){
    return this.registrationForm.get('alternativeemails') as FormArray;
  }

  addalternateemails(){
    this.Alternativeemail.push(this.fb.control(''));
  }

  ngOnInit(){
    const registrationForm = this.fb.group({
      userName : ['',[Validators.required,Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email : [''],
      subscribe : [false],
      password : [''],
      confirmPassword : ['',Validators.minLength(3)],
      address : this.fb.group({
        State : [''],
        city : [''],
        postalCode : ['']
      }),
      alternateEmails:this.fb.array([])

   },{validator: PasswordValidator});

   this.registrationForm.get('subscribe').valueChanges
    .subscribe(checkedValue => {
        const email = this.registrationForm.get('email');

    if(checkedValue){
      email.setValidators(Validators.required);
    }
      else{
        email.clearValidators();
      }
      email.updateValueAndValidity();
    });
  }

 
  
   /* registrationForm= new FormGroup({
        userName : new FormControl(''),
        password : new FormControl(''),
        confirmPassword : new FormControl(''),
        address : new FormGroup({
          State : new FormControl(''),
          city : new FormControl(''),
          postalCode : new FormControl('') 
        })
    }); 
    */
    load(){
      this.registrationForm.setValue({
        userName:'ABC',
        password:'xyz',
        confirmPassword:'xyz',
        address:{
          State:' New Delhi',
          city: 'Delhi',
          postalCode:'110015'
        }
      });
    }
}
