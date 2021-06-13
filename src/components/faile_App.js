import React from 'react' 
import Todo from './Todo'
import Completed from './Completed'
let currentId = 0;
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
            todos:
                [ {id:currentId},
                {text: ''},
                {completed: false},
                {editing: false}, ]
            };
    }
    
    render(){
        const {todos} = this.state;
        console.log(Object.keys(todos));


        return ( 
            <div>
              <form onSubmit={this.handleSubmit} >
                <input type="text" value={this.state.input} onChange={this.handleChange} />
                <button>保存</button>
              </form>
              <h1>Todoリスト</h1>
              <ul>
              {todos.map(({id, text, completed, editing}) => (
                  <li key={id}>
                    <Todo text={text} editing={editing} />
                  </li>  
                  ))}
              </ul>  
              
              <Completed />
            </div>
            );
            }
    

    
    handleSubmit = e => {
        e.preventDefault();
        if(!this.state.input) 
            {return;}
            
        //if(this.state.todos.map(({id, text, completed, editing})=>
          //  text === this.state.input)){return;}
        //if(this.state.todos)    
        for (var i = 0; i < this.state.todos.length; i++){
            
        }
        const newTodo = {
            id: currentId,
            text: this.state.input,
            completed: false,
            editing: false
        };
        
        const newTodos = [...this.state.todos, newTodo];
        this.setState({todos: newTodos});
        currentId++;
        this.setState({input: ""})
    };
    
    handleChange = e => {
        this.setState({input: e.currentTarget.value})
 
    };
    
}
