import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.less'],
})
export class ChangelogComponent implements OnInit {
  changelog = require('raw-loader!../../../../../CHANGELOG.md').default;

  constructor() {}

  ngOnInit(): void {}
}
