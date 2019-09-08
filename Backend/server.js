const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
let Todo = require('./todo.model');

mongoose.connect('mongodb://127.0.0.1:27017/todos', {useNewUrlParser : true });
mongoose.connection.on('connected', () => console.log('Connected'));
mongoose.connection.on('error', () => console.log('Connection failed with - ',err));

todoRoutes.route('/').get( function(req, res){
	Todo.find(function(err, todos){
		if(err){
			console.log;
		} else {
			res.json(todos);
		}
	});
});

todoRoutes.route('/add').post(function(req,res){
	let todo = new Todo (req.body);
	todo.save()
	.then(todo => {
		res.status(200).json({'todo' : 'todo added successfully'})
	}).catch(err => {
		res.status(400).send("adding new todo failed");
	});
});

todoRoutes.route('/update/:id').post(function(req, res){
	Todo.findById(req.params.id, function(err, todo){
		if(!todo)
			res.status(404).send('data is not found');
		else
			todo.todo_description = req.body.todo_description;
			todo.todo_responsible = req.body.todo_responsible;
			todo.todo_priority = req.body.todo_priority;
			todo.todo_completed = req.body.todo;
			
			todo.save().then( todo => {
				res.json('Todo updated');
			}).catch( err => {
				res.status(400).send("Update not possible");
			});
	});
});

app.use('/todos', todoRoutes);

app.listen(PORT, function(){
	console.log("server is running on Port:" + PORT);
});
