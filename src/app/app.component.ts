import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'phoneBook';

  CreateUser: string = "Enter Name"
  Phoneno: string = "Enter Phone Number"

  userlist: string[] = [];
  phoneNumber: string[] = [];

  onclick(prouser: any, phoneNo: any) {

    if (prouser.value.length > 0) {
      this.userlist.push(prouser.value);
      prouser.value = '';
      this.phoneNumber.push(phoneNo.value);
      phoneNo.value = '';
    }
  }
  ondelete(deleteme: any) {
    this.userlist.splice(deleteme, 1)
  }
}
