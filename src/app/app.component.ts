import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-game';
  credential = "";
  empID = "";
  dob = "";
  name = "";
  formDisplay = true;
  isDisplay = false;
  child_name = "";
  team_members = [
    "Sahana", "Priya MS", "Manju Ninitha",
    "Manju", "Jesmma", "Shruthika",
    "Harivasudevan", "Hemachandran", "Vijaykumar",
    "Vishnu", "Narendhiran", "Nandhini",
    "Nandhini", "Gopal", "Sharish",
    "Vignesh", "Harini", "Sneha",
    "Hariharan", "Manikandan"
  ];

  displayName(ID){
    if(ID == '1596129')
      alert('Hi Hariharan')
  }
  validateUser(val, pwd){
    console.log(val +" "+ pwd);
    if(val == '1596129' && pwd == '1596129@1412'){

      this.isDisplay = !this.isDisplay;

    }
    else{
      alert("Incorrect EmpID/Passoword");
      this.isDisplay = false;
    }
  }
  childButton(no,UserID)
  {
    this.formDisplay = false;
    console.log(no);
    this.child_name = "hariharan";
  }
/*printUsername(event){
    console.log(event)
    this.credential = event.target.value;
    console.log(this.credential)
    this.cred_arrary = this.credential.split('@');
    this.empID = this.cred_arrary[0];
    this.dob = this.cred_arrary[1];

    if(this.empID == "1596129" && this.dob == "14121997")
      alert("Hi Hariharan");
    else
      alert("Invalid Credentials");}*/

}

