import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import TodoEditFormView from '../views/TodoEdotFormView';
import autobind from 'autobind-decorator';

@inject('todoStore')
@autobind
@observer
class TodoEditFormContainer extends Component {
  onSetTodoProps(name, value) {
    this.props.todoStore.setTodoProps(name, value);
  }

  render() {
    const { todoStore } = this.props;

    return (
      <TodoEditFormView
        todo={todoStore.todo}
        onSetTodoProps={this.onSetTodoProps}
      />
    );
  }
}

export default TodoEditFormContainer;
