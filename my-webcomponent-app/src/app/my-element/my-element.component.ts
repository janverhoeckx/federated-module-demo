import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-my-element',
  standalone: true,
  templateUrl: './my-element.component.html',
  styleUrl: './my-element.component.scss'
})
export class MyElementComponent implements OnChanges {
  @Input() name: string = 'World';
  @Output() greet = new EventEmitter<string>();
  @Input() getToken?: (() => String);

  public ngOnChanges(changes: SimpleChanges) {
    console.log('Input changed:', changes);
  }

  public sendGreeting() {
    const message = `Hello from ${this.name}!`;
    this.greet.emit(message);
  }

  public getAccessToken() {
    if (this.getToken) {
      console.log(`Token retrieved from shell: ${this.getToken()}`);
    }
  }
}
