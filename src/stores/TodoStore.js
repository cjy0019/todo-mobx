import { observable, action, computed, makeObservable } from 'mobx';

class TodoStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  _todo = {
    title: 'test',
  };

  get todo() {
    return this._todo;
  }

  @action
  setTodoProps(name, value) {
    this._todo = {
      ...this._todo,
      [name]: value,
    };
  }
}

export default new TodoStore();
