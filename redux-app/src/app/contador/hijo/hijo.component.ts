import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent implements OnInit {

  @Input() contador: number = 0;
  @Output() changeCount = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  multiplicar() {
    this.contador *= 2;
    this.changeCount.emit(this.contador);
  }

  dividir() {
    this.contador /= 2;
    this.changeCount.emit(this.contador);
  }

  resetNieto(nieto: number) {
    this.contador = nieto;
    this.changeCount.emit(this.contador);
  }
}
