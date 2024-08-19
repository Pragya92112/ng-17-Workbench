import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';

function formatName(value:string){
  return "Hi "+value
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  @Input({alias:"userName",transform:formatName}) name="";
  @Input({transform:booleanAttribute}) isSingle!:boolean;
  @Input({transform:numberAttribute}) salary!:number;
// name="ramesh"
// status="doctor"
// salary=2000000
// isBtnDisabled=true
// inputVal= "test" 

// users=[
//   {name:"ramesh",isSingle:true,salary:10000},
//   {name:"suresh",isSingle:false,salary:10000},
//   {name:"nitesh",isSingle:true,salary:10000}
// ]

// onChange(e:Event){
//   const value= (e.target as HTMLInputElement).value 
//   this.inputVal=value
// }
}
