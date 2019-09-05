import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodoList from "./components/todo-list.component";

function App() {
  return (
	<Router>
		<div className="container">
			<h2>MERN Stack To Do App</h2>
			<Route path="/" exact component={TodoList}/> 
			<Route path="/edit/:id" component = {EditTodo} />
			<Route path= "/create" component = {CreateTodo} />
		</div>
	</Router>
    
  );
}

export default App;
