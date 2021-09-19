import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Service/http.service';
import {ActivatedRoute} from '@angular/router';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

 idOfQuiz:any; 
 path = 'http://localhost:3000/quiz';
 qArray: any;
 filter: any = {};

  constructor(private httpservice: HttpService,
     private route:ActivatedRoute) { 
       this.route.params.subscribe( val => {
        const id  = val['id'];
        this.idOfQuiz = id;
        console.log('ID Received', this.idOfQuiz);
       });
     }

  ngOnInit(): void {
    this.httpservice.get(this.path + '/' + this.idOfQuiz).subscribe(value => {
      this.qArray = value.questions;
      console.log('qArray', this.qArray);
  });
}

  getScore(){
    console.log('score: 4');
  }
  
  radioChange(event: MatRadioChange) {
  
  }

}
