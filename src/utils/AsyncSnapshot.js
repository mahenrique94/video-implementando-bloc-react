export class AsyncSnapshot {
  constructor(data, error) {
    this._data = data
    this._error = error
    this._hasData = Boolean(data)
    this._hasError = Boolean(error)
  }

  get data() {
    return this._data
  }

  get error() {
    return this._error
  }

  get hasData() {
    return this._hasData
  }

  get hasError() {
    return this._hasError
  }
}
