import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent {
  task: string = ''; //updated to define type of task as string
  tasks: { name: string }[] = []; //explicitly defines type of tasks as an array of objects with 'name' property

  onClick(){
    this.tasks.push({ name: this.task });
      this.task='';
  }

}
