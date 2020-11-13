import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


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
  @Input('fromParent') public run: string;
  @Output() public childInfo = new EventEmitter<string>();
  @Output() deleteRequest = new EventEmitter<string>();
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

  fireEvent(value: string): void{
    this.childInfo.emit(value);
  }
  deleteEvent(value: string): void{
    this.childInfo.emit(value);
  }

}
