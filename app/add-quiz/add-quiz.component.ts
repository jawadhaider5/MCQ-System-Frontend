import { HttpService } from '../Service/http.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  formGroup: FormGroup;
  path = 'http://localhost:3000/add/quiz';
  constructor(private formBuilder: FormBuilder,
    private httpservice: HttpService,
    private router: Router) {
      this.formGroup = this.formBuilder.group({
        testName: ['', [Validators.required,]],
        testId: ['', [Validators.required,]],
        questions: this.formBuilder.array([])
      });
     }

  ngOnInit() {
  }

  get questions(): FormArray {
    return this.formGroup.get('questions') as FormArray;
  }

  questionsForm(): FormGroup {

    return this.formBuilder.group({
      number: ['', [Validators.required,]],
      statement: ['', [Validators.required,]],
      opt1: ['', [Validators.required,]],
      opt2: ['', [Validators.required,]],
      opt3: ['', [Validators.required,]],
      opt4: ['', [Validators.required,]],
      ans: ['', [Validators.required,]]
    });
  }

  addQuestion() {
    this.questions.push(this.questionsForm())
    // console.log(this.questions);
  }

  addQuiz(formGroup: any){
    let quizObj: any = {};
    quizObj.testName = formGroup.value.testName,
    quizObj.testId = formGroup.value.testId,
    quizObj.questions = formGroup.value.questions

    console.log('Added Quiz', quizObj);

    this.httpservice.post(this.path, quizObj).subscribe(val => {
      console.log("Post Quiz API Call", val)
      formGroup.reset();
      Swal.fire({  
        position: 'center',  
        icon: 'success',  
        title: 'Quiz Added To Database',  
        showConfirmButton: false,  
        timer: 2000  
      });
      this.router.navigate(['/admin/quiz']);
    });    

  }
}
