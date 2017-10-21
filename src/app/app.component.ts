import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('messages').valueChanges();
    console.log(this.items);
  }
}
// import { AngularFireDatabase } from 'angularfire2/database';
// import { Component } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
//
// @Component({
//   selector: 'app-root',
//   template: `
//   <h2>test</h2>
//   <ul>
//   <li *ngFor="let item of items | async">
//     {{ item }}
//   </li>
//   </ul>
//   `
// })
// export class AppComponent {
//   items: Observable<any[]>;
//   constructor(db: AngularFireDatabase) {
//     this.items = db.list('items').valueChanges();
//   }
// }
