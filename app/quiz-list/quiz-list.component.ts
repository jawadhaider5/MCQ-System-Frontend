import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  path = 'http://localhost:3000/quizzes';
  qlist: any;

  constructor(private httpservice: HttpService,
    private router: Router) { }

  ngOnInit(): void {
    this.httpservice.get(this.path).subscribe(val => {
      this.qlist = val.ListOfQuizzes;
      console.log('List of Quizzes', this.qlist);
    });
  }
  
  moveToQuiz(item: any){
    this.router.navigate(['/quiz', item.testId]);
  }

}
