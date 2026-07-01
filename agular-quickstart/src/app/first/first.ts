import { AfterViewInit, Component, Input, input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input()
  value!: string;

  constructor(){
    console.log('constructor')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
 
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

}
