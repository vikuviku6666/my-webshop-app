import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-webShop-app';
  public parentMsg = 'this is a parent message';
   items = [];

  addItem(newItem: string): void {
    this.items.push(newItem);
  }
  crossOffItem(newItem): void {
    const item = this.items.filter(newItem);
    item.push(item);
  }

}
