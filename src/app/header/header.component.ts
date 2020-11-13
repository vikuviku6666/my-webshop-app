import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public name = 'Angular interpolation concept';
  public myUrl = window.location.port;
  public courseId = '123';
  public isDisabled = true;
  public textColor = 'TrueColor';
  public textSize = 'TrueSize';
  public required = true;
  public Group = {
    TrueColor: !this.required,
    TrueSize: this.required,
  };
  public myColor = 'red';
  public myStyles = {
    color: 'gold',
    fontSize: '40px',
    fontStyle: 'italic',
  };
  public greetings = '';
  public data = '';
  public status = true;
  public charm = 'charmcharm';
  public myChoice = 'three';
  public subject = ['Angular', 'React', 'vue', 'svelte'];
  // tslint:disable-next-line: no-input-rename
  @Input('fromParent') public run;
  @Output() public childInfo = new EventEmitter();
constructor() { }

  ngOnInit(): void {
  }

  userName(): string {
    return 'Welcome: ' + this.name;
  }
  onClick(): void {
   this.greetings = 'welcome to Google Angular World';
  }
  message(message): void {
    console.log(message);
  }

  fireEvent(): void{
    this.childInfo.emit('this is from child');
  }

}
