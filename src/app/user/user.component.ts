import { Component,EventEmitter,Input, Output,output} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) id!: string;
   @Input({required:true}) avatar!: string;
  @Input({required:true}) name!: string;
  @Output() selecttony = new EventEmitter<string>();

  //selecttony =output<string>();



 /*  avatar =input.required<string>();
  name =input.required<string>(); */

/*   imagePath = computed(()=>{

    return 'assets/users/'+ this.avatar();

  }); */

get imagePath()
{
  return 'assets/users/'+ this.avatar;
}


onSelectUser_user() {

  this.selecttony.emit(this.id);

 }

}
