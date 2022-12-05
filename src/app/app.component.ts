import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // condition = false
  people: string[] = []

  // toggle(){
  //   this.condition = !this.condition
  // }

  profile = {
    firstName: "Sergei",
  }

  profileForm = new FormGroup({
    firstName: new FormControl(this.profile.firstName, Validators.required),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    // userPhone: new FormControl("", Validators.pattern("[0-9]{10}")),
  })

  constructor(
    private dataService: DataService, 
    private router: Router){
    this.people = dataService.getData()
  }

  // get getUserPhoneControl(): FormControl {
  //   return this.profileForm.get('userPhone') as FormControl
  // }

  onSubmit() {
    const name = this.profileForm.value.firstName
    if (name){
      this.dataService.addData(name)
      this.people = this.dataService.getData()
      this.router.navigate(['user', name])
    }
  }
}
