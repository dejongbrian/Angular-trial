import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../goal';



@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  

     goal: Goal[] = [
      new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,3,14)),
      new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
      new Goal(3,'Get new Phone Case','Dejong has his birthday coming up soon',new Date(2022,1,12)),
      new Goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
      new Goal(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
      new Goal(6,'Plot my world domination plan','Cause I am Frank Lucas',new Date(2030,3,14)),
    
    
    ];
     
    toggleDetails(index){
      this.goal[index].showDescription = !this.goal[index].showDescription;
    }

    deleteGoal(isComplete, index){
      let toDelete = confirm(`Are you sure you want to delete ${this.goal[index].name}?`)

     
      if (isComplete) {
        this.goal.splice(index,1);
      }
    }
    addNewGoal(goal){
      let goalLength = this.goal.length;
      goal.id = goalLength+1;
      goal.completeDate = new Date(goal.completeDate)
      this.goal.push(goal)
    }
  
  constructor() { }

  ngOnInit() {
  }

}
