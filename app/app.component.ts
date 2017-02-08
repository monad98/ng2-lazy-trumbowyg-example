import {Component} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'my-app',
  template: `
    <h2>Angular 2 Trumbowyg with Observable Example </h2>
    <trumbowyg [togglePreview]="showPreview" [initialContent]="initialContentOne" [update]="update$" (savedContent)="contentOne=$event"></trumbowyg>
    <button (click)="showPreview=!showPreview">Toggle Preview</button>
    <button (click)="update$.next();showPreview=true">update content with observable</button>
    <h2>Preview Mode {{showPreview ? 'On':'Off'}}</h2>
    <div *ngIf="showPreview">
      <p [innerHTML]="contentOne"></p>
    </div>
     <br><br><br>
     <h2>Angular 2 Trumbowyg Live Update Example</h2>
    <trumbowyg liveUpdate="true" togglePreview="true" [initialContent]="initialContentTwo" (savedContent)="contentTwo=$event"></trumbowyg>
    <div>
      <p [innerHTML]="contentTwo"></p>
    </div>
     
  `
})
export class AppComponent {
  private content: string;
  private showPreview: boolean = false;
  private initialContentOne: string = `<h2>This is an initial title.</h2><p>This is an initial content.</p><p><img src="https://angular.io/resources/images/logos/standard/shield-large.png" alt=""><br></p><p><br></p>`
  private initialContentTwo: string = `<h2>This is an initial title.</h2><p>This is an initial content.</p><p><img src="https://angular.io/resources/images/logos/standard/shield-large.png" alt=""><br></p><p><br></p>`
  private contentOne: string;
  private contentTwo: string;
  update$: Subject<any> = new Subject();
}