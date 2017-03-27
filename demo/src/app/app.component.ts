import { Component, AfterContentInit } from '@angular/core';

declare const require: any
declare const PR:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  
  // ts = require('!!raw-loader?lang=typescript!./charts/basic.component.ts');
  ts = require("!!raw-loader!./charts/basic.component.ts");
  html = require("!!html-loader!./charts/basic.component.html");

  ngAfterContentInit() {
    console.log(this.ts);
    console.log(this.html);
    setTimeout(()=>{
      if (typeof PR !== 'undefined') {
        // google code-prettify
        PR.prettyPrint();
      }
    }, 150);
  }
}
