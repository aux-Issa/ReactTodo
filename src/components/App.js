import React from 'react' 
import Todo from './Todo'
import Completed from './Completed'
let currentId = 0;

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
            ErrorMessage: '',
            todos:[],
        };
    }
    
    render(){
        const {todos} = this.state;
        const completedTodos = todos.filter((todo => todo.completed === true));
        const filteredTodos = todos.filter((todo => todo.completed === false));
        console.log(todos);
        
        //console.log(Object.keys(todos);

        if(completedTodos.length < 5){
          return ( 
              <div>
                <p>{this.state.ErrorMessage}</p>
                <form onSubmit={this.handleSubmit} >
                  <input type="text" value={this.state.input} onChange={this.handleChange} />
                  <button>保存</button>
                </form>
                <h1>Todoリスト</h1>
                <ul>
                {filteredTodos.map(({id, text, completed, editing}) => (
                    <li key={id}>
                        <Todo text={text} 
                        id={id} 
                        onEdit={this.handleEdit} 
                        onCompleted={this.handleClickCompleted} 
                        onDelete={this.handleClickDelete}/>
                    </li>  
                    ))}
                </ul>  
                
                <Completed onClick={this.handleClick} completedTodos={completedTodos}/>
              </div>
              );}
            else{
              return(
              <div>
                <a href=''>BOOTCAMP突破おめでとう！！</a>
              </div>)
            }}  
            
    

    
    handleSubmit = e => {
        e.preventDefault();
        if(!this.state.input){
          this.setState({ ErrorMessage: '入力が空です。' })
          return;
        } 
        
        for (var i = 0; i < this.state.todos.length; i++){
          if(this.state.todos[i].editing && this.state.todos[i].text===this.state.input){
            this.setState({ ErrorMessage: "編集内容に変更がありません"});
            return;}
          else if(this.state.todos[i].editing){
            this.submitEdit( this.state.input, this.state.todos[i].id)
            return;
          }  
          else if(this.state.todos[i].text===this.state.input){
            this.setState({ ErrorMessage: '入力が重複しています。' });
            return;
        }}   
            
            const newTodo = {
                id: currentId,
                text: this.state.input,
                completed: false,
                editing: false
        };
        
        const newTodos = [...this.state.todos, newTodo];
        this.setState({todos: newTodos});
        currentId++;
        this.setState({input: "",
                       ErrorMessage: ''
        })

    };
    
    handleChange = e => {
        this.setState({input: e.currentTarget.value})
    };
    
    handleEdit = (text, id) => {
        const newTodos = this.state.todos.map(todo => {
          if(todo.id === id){
            return{
              ...todo,
              editing: true,
            };
          }
          return todo;
        });  
        this.setState({input: text,
                       todos: newTodos
        })
    };
    
    submitEdit = (text, id) => {
        const editedTodos = this.state.todos.map(todo => {
          if(todo.id === id){
            return{
              ...todo,
              text,
              editing: false,
            };
          }
          return todo;
        });  
        this.setState({input: "",
                       ErrorMessage: "編集成功",
                       todos: editedTodos

        })      
    }
    handleClickCompleted = id => {
      const newTodos = this.state.todos.map(todo => {
        if(id === todo.id){
          return{
                 ...todo,
                 completed: true,
                 };
        }
        return todo
      });
      
      this.setState({todos: newTodos}); 
    }
    handleClickDelete = id => {
        const newTodos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({todos: newTodos});
    };

}
export default App;