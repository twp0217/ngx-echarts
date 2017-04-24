import { Component, AfterContentInit } from '@angular/core';

declare const require: any
declare const PR:any;

@Component({
    selector: 'charts',
    templateUrl: './charts.component.html'
})

export class ChartsComponent implements AfterContentInit {
    basicHtml = require("!!html-loader!./basic.component.html");
    basicTs = require("!!raw-loader!./basic.component.ts");

    themeHtml = require("!!html-loader!./theme.component.html");
    themeTs = require("!!raw-loader!./theme.component.ts");

    settingHtml = require("!!html-loader!./setting.component.html");
    settingTs = require("!!raw-loader!./setting.component.ts");

    eventHtml = require("!!html-loader!./event.component.html");
    eventTs = require("!!raw-loader!./event.component.ts");

    methodHtml = require("!!html-loader!./method.component.html");
    methodTs = require("!!raw-loader!./method.component.ts");

    calendarHtml = require("!!html-loader!./calendar.component.html");
    calendarTs = require("!!raw-loader!./calendar.component.ts");

    ngAfterContentInit() {
        setTimeout(() => {
            if (typeof PR !== 'undefined') {
                PR.prettyPrint();
            }
        }, 300);
    }
}