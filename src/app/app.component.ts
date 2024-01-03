import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable,  filter,  from, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'Angular-Observable';
  data:any[] =[];
  array1=[1,3,5,7,9];
  array2=['a','b','c','d','e'];
  //observable
  //even Emmiter ,event handler, event listener
  // myObservable=new Observable((observer)=>{
  //  setTimeout(()=>{observer.next(1)},1000) ;
  //  setTimeout(()=>{observer.next(2)},2000) ;
  // // setTimeout(()=>{observer.error(new Error('Something went wrong.'))},4000) ;
  //  setTimeout(()=>{observer.next(3)},3000) ;
  //  setTimeout(()=>{observer.next(4)},4000) ;
  //  setTimeout(()=>{observer.next(5)},5000) ;
  //  setTimeout(()=>{observer.next(6)},6000) ;
  //  setTimeout(()=>{observer.complete()},7000) ;
  // });

//myObservable=of(this.array1,this.array2);
promiseData= new Promise((resolve,reject)=>{
  resolve([10,20,30,40,50]);
})

@ViewChild('creatbtn')
creatBtn:ElementRef;

myObservable=from([2,4,6,8,10]).pipe(map((val)=>{
  return val*7;
}),filter((val,i)=>{
  return val %4 === 0;
 }))
// transformeObs=this.myObservable.pipe(map((val)=>{
//   return val*8;
// }),filter((val,i)=>{
//   return val %5 === 0;
//  }))
// filteredObs=this.transformeObs.pipe(filter((val,i)=>{
//  return val %5 === 0;
// }))
//creatBtnObs;

  GetAsynData(){
    //observer
    //this is event listener
    // this.myObservable.subscribe((val:any)=>{
    //   this.data.push(val);
    // },//handling error object
    // (err)=>{
    //   alert(err.message);
    // },
    // ()=>{
    //   alert('all the data is streamed');
    // });
    this.myObservable.subscribe({
      next:(val:any)=> {
        this.data.push(val);
      },
      error(err){
        alert(err.message);
      },
      complete(){
        alert('all the data is streamed')
      }

    })
  }
//  buttonClicked(){
//   let count=0;
//   this.creatBtnObs=fromEvent(this.creatBtn.nativeElement,'click')
//   .subscribe((data)=>{
//     console.log(data);
//     this.showItem(++count);
//   });
//  } 
 ngAfterViewInit(){
 // this.buttonClicked();
 }
//  showItem(val){
//  let div= document.createElement('div');
//  div.innerText='Item'+val;
//  div.className='data-list';
//  document.getElementById('container').appendChild(div);
//  }
}
