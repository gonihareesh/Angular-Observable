import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit{
ngOnInit(){
//let obs=new Observable((observer)=>{observer.next(Math.random())})
//const subject=new Subject();
//ReplaySubject(bufferSize,windowTime)..last emitted values 
//const subject=new ReplaySubject(1,1000);
//const subject=new BehaviorSubject<number>(100);
// subject.next(10);
// subject.next(20);
// subject.next(30);

//  subject.subscribe((data)=>{console.log("Subscriber 1:"+data)})
 
//  subject.subscribe((data)=>{console.log("Subscriber 2:"+data)})

//  subject.next(2020);
// subject.subscribe((data)=>{console.log("Subscriber 3:"+data)})
// subject.next(2023);
// subject.next(Math.random());

//ajax call get request
// const subject=new Subject();
// const data=ajax('https://randomuser.me/api/');
// subject.subscribe((response)=>console.log(response));
// subject.subscribe((response)=>console.log(response));
// subject.subscribe((response)=>console.log(response));
// //here subject is using consumer
// data.subscribe(subject);
// //Async subject
// const asyncsubject=new AsyncSubject();
// asyncsubject.next(100);
// asyncsubject.next(200);
// asyncsubject.next(300);
// asyncsubject.subscribe(data =>console.log(`Subscribe 1: ${data}`));
// asyncsubject.complete();
// asyncsubject.next(400);
// asyncsubject.complete();
// asyncsubject.subscribe(data =>console.log(`Subscribe 1: ${data}`));

//promise vs observable

const promise=new Promise((reslove,reject)=>{
console.log('promise is called');
reslove(100);
reslove(200);
reslove(300);
})
promise.then((data)=>{
  console.log(data);
})
const obs=new Observable((sub)=>{
  console.log('Observable is called');
  sub.next(100);
  sub.next(200);
  sub.next(300);
})
//Observable only emits the data if there is a subscribe() 
obs.subscribe(data=> console.log(data));
}
}
