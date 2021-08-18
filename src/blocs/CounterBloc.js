import { scan, Subject } from "rxjs";

export class CounterBloc {
  constructor() {
    this._subject = new Subject()
  }

  get stream() {
    return this
      ._subject
      .pipe(
        scan(
          (currentState, newValue) => currentState + newValue,
          0,
        )
      )
  }

  increment() {
    this._subject.next(1)
  }

  decrement() {
    this._subject.next(-1)
  }

  throw() {
    this._subject.error('DEU RUIM')
  }

  dispose() {
    this._subject.complete()
  }
}