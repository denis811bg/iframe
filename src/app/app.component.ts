import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'iframe';

  constructor(private _renderer2: Renderer2,
              @Inject(DOCUMENT) private _document: Document) {}

  public ngOnInit(): void {
    let script = this._renderer2.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://test.smartasset.com:8080/captivate/script/etphvhxl';
    this._renderer2.appendChild(this._document.body, script);
  }
}
