"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AppComponent = (function () {
    function AppComponent() {
        this.showPreview = false;
        this.initialContentOne = "<h2>This is an initial title One.</h2><p>This is an initial content.</p><p><img src=\"https://angular.io/resources/images/logos/standard/shield-large.png\" alt=\"\"><br></p><p><br></p>";
        this.initialContentTwo = "<h2>This is an initial title Two.</h2><p>This is an initial content.</p><p><img src=\"https://github.com/Alex-D/Trumbowyg/raw/develop/banner.png\" alt=\"\"><br></p><p><br></p>";
        this.update$ = new rxjs_1.Subject();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h2>Angular 2 Trumbowyg Update with <strong>Observable</strong> Example </h2>\n    <p>Updated only when update button clicked</p>\n    <trumbowyg [togglePreview]=\"showPreview\" [initialContent]=\"initialContentOne\" [update]=\"update$\" (savedContent)=\"contentOne=$event\"></trumbowyg>\n    <button (click)=\"showPreview=!showPreview\">Toggle Preview</button>\n    <button (click)=\"update$.next();showPreview=true\">update content with observable</button>\n    <h2>Preview Mode {{showPreview ? 'On':'Off'}} </h2>\n    <div *ngIf=\"showPreview\">\n      <p [innerHTML]=\"contentOne\"></p>\n    </div>\n     <br><br><br>\n    <h2>Angular 2 Trumbowyg <strong>Live Update</strong> Example</h2>\n    <trumbowyg liveUpdate=\"true\" togglePreview=\"true\" [initialContent]=\"initialContentTwo\" (savedContent)=\"contentTwo=$event\"></trumbowyg>\n    <div>\n      <p [innerHTML]=\"contentTwo\"></p>\n    </div>\n     \n  ",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map