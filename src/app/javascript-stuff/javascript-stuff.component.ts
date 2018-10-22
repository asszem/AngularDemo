// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import { Component, OnInit } from '@angular/core';
import * as consoleLogger from './sample-scripts/console-log';
import * as objectStuff from './sample-scripts/objects-stuff';
import * as forLoops from './sample-scripts/for-loops';
import * as asyncAwait from './sample-scripts/async-await';

@Component({
  selector: 'app-javascript-stuff',
  templateUrl: './javascript-stuff.component.html',
  styleUrls: ['./javascript-stuff.component.css']
})
export class JavascriptStuffComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  doLog() {
    consoleLogger.log();
  }

  doObjectStuff() {
    objectStuff.doObjectStuff();
  }

  doForLoops() {
    forLoops.doForLoops();
  }

  doAsyncAwait() {
    asyncAwait.doAsyncAwait();
  }
}
