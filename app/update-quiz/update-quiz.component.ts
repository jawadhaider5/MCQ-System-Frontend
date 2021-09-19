import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Service/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  path = 'http://localhost:3000/question';
  idOfQuiz: any;
  path2 = 'http://localhost:3000/quiz';
  qArray: any;
  testName: any;
  filter: any = {};

  constructor(private httpservice: HttpService,
    private route: ActivatedRoute, private rt: Router) {
    this.route.params.subscribe(val => {
      const id = val['id'];
      this.idOfQuiz = id;
      console.log('ID Received', this.idOfQuiz);
    });
  }

  ngOnInit(): void {
    this.httpservice.get(this.path + '/' + this.idOfQuiz).subscribe(value => {
      this.testName = value.testName.toUpperCase();
      this.qArray = value.questions;
      console.log('qArray', this.qArray);
    });
  }

  deleteQuestion(item: any) {
    let quesObj: any = {};
    quesObj.number = item.number;

    this.httpservice.put(this.path + '/' + this.idOfQuiz, quesObj).subscribe(value => {

    });
  }

  reloadPage() {
    window.location.reload();
  }

}
