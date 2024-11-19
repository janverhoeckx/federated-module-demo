import {AfterViewInit, Component, ViewChild, ViewContainerRef} from '@angular/core';
import {loadRemoteModule} from '@angular-architects/module-federation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('placeHolder', {read: ViewContainerRef})
  viewContainer!: ViewContainerRef;

  constructor() {
  }

  ngAfterViewInit(): void {
    console.log(this.viewContainer);
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component'
    }).then(m => {
      this.viewContainer.createComponent(m.AppComponent);
    });
  }

}
