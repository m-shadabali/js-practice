class Media {
  constructor(title, isCheckedOut, ratings){
    this._title = title;
    this._isCheckedOut = isCheckedOut;
    this._ratings = ratings;
  }
  get title(){
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
}
