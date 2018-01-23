import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styles:['.blue-bg{background-color:blue}']
})
export class AppComponent {

  private currentUser:User = {username:"test",email:"test@test.com"}

  private hideEmail:boolean = false

  private toggle() {
    this.hideEmail = !this.hideEmail
  }

  private changeMail(newMail:String){
    this.currentUser.email = newMail
  }
  private KeyPress(event:KeyboardEvent){
    if(event.keyCode==13){
      var inputElement = <HTMLInputElement>event.target
      this.changeMail(inputElement.value)
    }
  }
}

interface User{
  username:string,
  email:string
}
