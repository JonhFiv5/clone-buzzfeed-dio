import { Component } from '@angular/core';
import quiz_questions from 'src/assets/data/quiz_questions.json';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  title: string = '';
  questions: any = '';
  results: any = '';
  selectedQuestion: any = '';
  answers: string[] = [];
  finalResult: string = '';
  questionCurrentIndex: number = 0;
  questionMaxIndex: number = 0;
  finished: boolean = false;

  ngOnInit() {
    if(quiz_questions) {
      this.questions = quiz_questions.questions;
      this.results = quiz_questions.results;
      this.title = quiz_questions.title;

      this.questionCurrentIndex = 0;
      this.selectedQuestion = this.questions[0];
      this.questionMaxIndex = this.questions.length - 1;
      
      this.finished = false;
    }
    console.log(this.selectedQuestion)
  }

  savePlayerChoice(choice: string) {
    this.answers.push(choice);
    this.showNextQuestion();
  }

  showNextQuestion() {
    this.questionCurrentIndex++;
    if(this.questionCurrentIndex <= this.questionMaxIndex) {
      this.selectedQuestion = this.questions[this.questionCurrentIndex];
    } else {
      this.evaluateAnswers(this.answers);
    }
  }

  evaluateAnswers(answers: string[]) {
    let qtdOptionA = answers.filter(answer => answer === 'A').length;
    let qtdOptionB = answers.filter(answer => answer === 'B').length;
    let result = qtdOptionA > qtdOptionB ? 'A' : 'B';

    this.finalResult = this.results[result as keyof typeof this.results];
    this.finished = true;
  }

  restartQuiz() {
    this.answers = [];
    this.finalResult = '';
    this.questionCurrentIndex = 0;
    this.selectedQuestion = this.questions[0];
    this.finished = false;
  }
}
