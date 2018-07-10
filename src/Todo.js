'use strict';

import templates from './Todo.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './TodoForm';
import './TodoItem';
import './FormDetails';
import './Modal';

import './todo.scss';

class Todo extends Component {
	formdetails(name)
	{
		this.state.form1 = [...this.state.form1,{
    	done: false,
    	name
		}];
	}

	handleForm(event)
    {
        this.formdetails(event.name);
    }

	addTodo(title) {
		this.todos = [...this.todos, {
			done: false,
			title
		}];
	}

	handleTodoAdd(event) {
		this.addTodo(event.title);
	}

	handleTodoClick(event) {
		this.toggleTodo(event.index);
	}

	toggleTodo(todoIndex) {
		this.todos = this.todos.map((todo, index) => {
			if (todoIndex == index) {
				todo = Object.assign({}, todo, {
					done: !todo.done
				});
			}
			return todo;
		});
	}	
    
}
Soy.register(Todo, templates);

Todo.STATE = {
	form1: {
		value:[
			{
				done: false,
				name: ''
			}
		]
	},
todos: {
    // Default value
    value: [
        {
            done: false,
            title: 'Todo 1'
        },
        {
            done: false,
            title: 'Todo 2'
        }
    ]
},

};

export { Todo };
export default Todo;