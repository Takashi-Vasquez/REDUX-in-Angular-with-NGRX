import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html'
})
export class NietoComponent implements OnInit {
  @Input() contador: number = 0;
  @Output() changeCount = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.contador = 0;
    this.changeCount.emit(this.contador);
  }

}
