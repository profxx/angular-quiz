import { Component, OnInit } from '@angular/core';
import quiz_questions from '../../../assets/data/quiz_questions.json'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  title:string = ''
  questions: any
  questionSelected: any

  answers:string[] = [];
  answerSelected:string = '';
  quantityA:number = 0;
  quantityB:number = 0;

  questionIndex:number = 0
  questionMaxIndex:number = 0

  finished:boolean = false

  result:string = ''

  constructor() { }

  ngOnInit(): void {
    if (quiz_questions){
      this.title = quiz_questions.title
      this.questions = quiz_questions.questions
      this.questionSelected = this.questions[this.questionIndex]
      this.questionMaxIndex = this.questions.length
    }
  }
  playerChoice(value:string){
    this.answers.push(value);
    if (value === 'A'){
      this.quantityA += 1
    }else if (value === 'B'){
      this.quantityB += 1
    }
    this.nextStep();

  }
  async nextStep(){
    this.questionIndex += 1;
    if(this.questionMaxIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex];
    }else{
      this.checkResult();
      this.finished = true;
    }
  }
  async checkResult(){
    if (this.quantityA > this.quantityB){
      this.result = 'Herói'
    }else if (this.quantityA == this.quantityB){
      this.result = 'Meio herói, meio vilão'
    }else{
      this.result = 'Vilão'
    }
  }
}
