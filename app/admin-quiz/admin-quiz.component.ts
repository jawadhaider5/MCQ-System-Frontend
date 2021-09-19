import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-quiz',
  templateUrl: './admin-quiz.component.html',
  styleUrls: ['./admin-quiz.component.css']
})

export class AdminQuizComponent implements OnInit {

  idOfQuiz: any;
  path = 'http://localhost:3000/quizzes';
  path2 = 'http://localhost:3000/quiz';
  quizlist: any;
  constructor(private httpservice: HttpService,
    private router: Router) { 
      
    }

    ngOnInit(): void {
      this.httpservice.get(this.path).subscribe(val => {
        this.quizlist = val.ListOfQuizzes;
        console.log('Quiz List', this.quizlist);
      });
    }

    addNewQuiz(){
      this.router.navigate(['/add/quiz']);
    }

    deleteQuiz(item: any){
      this.httpservice.delete(this.path2 + '/' + item.testId).subscribe( value => {
        console.log('Quiz Deleted', value);
        this.router.navigate(['admin/quiz'])
          .then(() => {
            window.location.reload();
          });
      });
    }

    UpdateQuiz(item: any){
      this.router.navigate(['/question', item.testId]);
    }
}
