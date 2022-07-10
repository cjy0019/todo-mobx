import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import TodoListView from '../views/TodoListView';

@inject('todoStore')
@autobind
@observer
class TodoListContainer extends Component {
  onSelectedTodo(todo) {
    this.props.todoStore.selectedTodo(todo);
  }

  render() {
    const { todos } = this.props.todoStore;

    return <TodoListView todos={todos} onSelectedTodo={this.onSelectedTodo} />;
  }
}

export default TodoListContainer;
