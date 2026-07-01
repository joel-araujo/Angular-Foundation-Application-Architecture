import { Component } from '@angular/core';
import { InlineTemplate } from '../inline-template/inline-template';
import { ExternalTemplate } from '../external-template/external-template';
import { Company } from '../company/company';

@Component({
  selector: 'app-root',
  imports: [Company, InlineTemplate, ExternalTemplate],
  templateUrl: './root.html',
  styleUrl: './root.css',
})

export class Root {}
