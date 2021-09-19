import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AlertmsgComponent } from './alertmsg/alertmsg.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { AdminQuizComponent } from './admin-quiz/admin-quiz.component';
import { UpdateQuizComponent } from './update-quiz/update-quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizListComponent,
    SignupComponent,
    LoginComponent,
    AlertmsgComponent,
    AddQuizComponent,
    AdminQuizComponent,
    UpdateQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
