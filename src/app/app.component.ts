import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Message {
  sender: string;
  body: string;
  timestamp? : number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  items: Observable<any[]>;
  message: FormGroup;
  constructor(private db: AngularFireDatabase, private fb: FormBuilder) {
    this.items = db.list('messages').valueChanges();
    console.log(this.items);
  }

  ngOnInit() {
    this.message = this.fb.group({
      sender: ['', [Validators.required, Validators.minLength(2)]],
      body: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
  onSubmit({ value, valid }: { value: Message, valid: boolean }) {
    console.log(value, valid);
    if(valid) {
      let timestamp = new Date().getTime();
      let message = value;
      message.timestamp = timestamp;
      this.db.list('messages').push(message);
    }
  }
}
