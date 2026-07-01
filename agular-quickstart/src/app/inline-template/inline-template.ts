import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-template',
  imports: [],
  template: `
  <h1>this is an inline component</h1>
  <p>this component uses an inline template</p>
  `,
  styles: [`
  h1{color:blue;}
  p{font-size: 16px;}  
  `]
})
export class InlineTemplate {}
