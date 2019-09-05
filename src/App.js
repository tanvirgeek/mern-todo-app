import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodoList from "./components/todo-list.component";
import logo from "./logo.jpg";

function App() {
  return (
	<Router>
		<div className="container">
			<nav className = "navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="http://www.google.com" target="_blank">
					<img src={logo} width="30" height = "30" alt="tanvirgeekApps"/>
				</a>
				<Link to="/" className="navbar-brand"> MERN-Stack Todo App</Link>
				<div className="collaspe nav-collaspe">
					<ul className="navbar-nav mr-auto">
						<li classname="navbar-item">
							<Link to="/" className="nav-link">Todos</Link>
						</li>
						<li classname="navbar-item">
							<Link to="/create" className="nav-link">Create Todos</Link>
						</li>
					</ul>
				</div>
			</nav>
			<h2>MERN Stack To Do App</h2>
			<Route path="/" exact component={TodoList}/> 
			<Route path="/edit/:id" component = {EditTodo} />
			<Route path= "/create" component = {CreateTodo} />
		</div>
	</Router>
    
  );
}

export default App;
