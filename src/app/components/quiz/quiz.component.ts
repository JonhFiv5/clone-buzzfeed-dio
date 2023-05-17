import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  title: string = '';
  questions: any;
  selectedQuestion: any;
  answers: string[] = [];
  selectedAnswer: string = '';
  questionCurrentIndex: number = 0;
  questionMaxIndex: number = 0;
  finished: boolean = true;

}
