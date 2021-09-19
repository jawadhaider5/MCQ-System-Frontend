import { UpdateQuizComponent } from './update-quiz/update-quiz.component';
import { AdminQuizComponent } from './admin-quiz/admin-quiz.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'signup', component: SignupComponent, pathMatch:'full'
  },
  {
    path:'login', component: LoginComponent, pathMatch:'full'
  },
  {
    path:'quizzes', component: QuizListComponent, pathMatch:'full'
  },
  {
    path:'quiz/:id', component: QuizComponent, pathMatch:'full'
  },
  {
    path:'add/quiz', component: AddQuizComponent, pathMatch:'full'
  },
  {
    path:'admin/quiz', component: AdminQuizComponent, pathMatch:'full'
  },
  {
    path:'question/:id', component: UpdateQuizComponent, pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }