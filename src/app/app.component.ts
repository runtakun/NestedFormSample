import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: Array<any> = [];

  ngOnInit(): void {
    this.items = [{name: 'a'}, {name: 'b'}, {name: 'c'}];
  }

  addItem() {
    this.items.push({name: ''});
  }

  removeItem(i) {
    this.items.splice(i, 1);
  }
}
